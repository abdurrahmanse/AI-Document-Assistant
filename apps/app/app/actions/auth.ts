'use server'

import { cookies } from 'next/headers'

export async function setAuthToken(token: string) {
  const cookieStore = cookies()
  cookieStore.set('access_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 15 * 60, // 15 minutes to match backend
  })
}

export async function setRefreshToken(token: string) {
  const cookieStore = cookies()
  cookieStore.set('refresh_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  })
}

export async function removeAuthTokens() {
  const cookieStore = cookies()
  cookieStore.delete('access_token')
  cookieStore.delete('refresh_token')
}
