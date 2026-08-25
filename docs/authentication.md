# Authentication & Authorization

Because this platform handles highly sensitive, private user documents, authentication and data isolation are the most critical components of the system.

## 1. Authentication Strategy (JWT)

We use a stateless JSON Web Token (JWT) architecture. This eliminates the need for database lookups on every request, allowing the API to scale massively.

### Password Hashing
- **Algorithm:** Argon2id (via `passlib` and `argon2-cffi`).
- **Why?** Argon2id is the industry standard for password hashing. It is specifically designed to resist GPU cracking and side-channel attacks, making it vastly superior to older algorithms like bcrypt or PBKDF2.

### Token Lifecycle
1. **Access Tokens:** 
   - Sent via the `Authorization: Bearer <token>` header.
   - Extremely short-lived (e.g., 15 minutes).
   - Contains the `user_id` and `role` in the payload.
2. **Refresh Tokens:** 
   - Sent via an `HttpOnly`, `Secure`, `SameSite=Lax` cookie.
   - Long-lived (e.g., 7 days).
   - *Why cookies?* By making the refresh token `HttpOnly`, we completely prevent malicious JavaScript (XSS attacks) from stealing the token. The browser handles sending it securely to the `/refresh` endpoint.
3. **Token Rotation:** Before the Access Token expires, the frontend Axios interceptor silently calls `/api/v1/auth/refresh` to obtain a new Access Token without interrupting the user.

## 2. Role-Based Access Control (RBAC)

FastAPI endpoints enforce access via Dependency Injection (e.g., `Depends(get_current_user)`).

- **User Role (`ROLE_USER`):** Standard access. Users can only read, write, and delete data explicitly tied to their own `user_id`.
- **Admin Role (`ROLE_ADMIN`):** Elevated access. Capable of accessing `/api/v1/admin/*` endpoints to view global metrics, suspend malicious accounts, and inspect system health.

## 3. Strict Tenant Isolation (The Golden Rule)

In a multi-tenant SaaS, the most catastrophic failure is one user gaining access to another user's private documents.

**The Golden Rule:** Every database query that fetches user data (documents, chat messages, chunks) MUST include an explicit `user_id` check. 

**BAD (Vulnerable to IDOR attacks):**
```python
# If a user guesses another user's document ID, they can view it.
query = select(Document).where(Document.id == requested_id)
```

**GOOD (Secure):**
```python
# The current_user_id is extracted securely from the JWT.
query = select(Document).where(
    Document.id == requested_id, 
    Document.user_id == current_user_id
)
```
*There are zero exceptions to this rule for user-facing API endpoints.*

## 4. Immediate Revocation

Because stateless JWTs cannot be revoked until they naturally expire, we implement a revocation strategy for emergency scenarios (e.g., an Admin suspends a user, or a user clicks "Log out of all devices").

- When a revocation event occurs, the user's Refresh Token generation timestamp or ID is blacklisted in the database.
- The next time the short-lived Access Token expires (max 15 mins) and the client attempts to use the Refresh Token, the API rejects it, forcing an immediate logout.
