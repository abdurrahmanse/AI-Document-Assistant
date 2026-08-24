import os

def create_structure(base_dir, structure):
    for root, dirs_and_files in structure.items():
        root_path = os.path.join(base_dir, root)
        os.makedirs(root_path, exist_ok=True)
        for item in dirs_and_files:
            if isinstance(item, dict):
                create_structure(root_path, item)
            elif isinstance(item, str):
                if item.endswith('/'):
                    os.makedirs(os.path.join(root_path, item), exist_ok=True)
                else:
                    file_path = os.path.join(root_path, item)
                    os.makedirs(os.path.dirname(file_path), exist_ok=True)
                    if not os.path.exists(file_path):
                        with open(file_path, 'w') as f:
                            pass

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"

scaffold = {
    "apps/web": [
        "app/(marketing)/page.tsx",
        "app/(marketing)/features/",
        "app/(marketing)/how-it-works/",
        "app/(marketing)/pricing/",
        "app/(marketing)/security/",
        "app/(marketing)/docs/",
        "app/(marketing)/contact/",
        "app/(marketing)/layout.tsx",
        "app/(auth)/login/",
        "app/(auth)/register/",
        "app/(auth)/forgot-password/",
        "app/privacy/",
        "app/terms/",
        "app/sitemap.ts",
        "app/robots.ts",
        "app/layout.tsx",
        "components/header/",
        "components/footer/",
        "components/navigation/",
        "components/shared/",
        "sections/hero/",
        "sections/features/",
        "sections/workflow/",
        "sections/security/",
        "sections/pricing/",
        "sections/faq/",
        "sections/cta/",
        "lib/api/",
        "lib/seo/",
        "lib/utils/",
        "public/"
    ],
    "apps/app": [
        "app/(auth)/login/",
        "app/(auth)/register/",
        "app/(auth)/forgot-password/",
        "app/(dashboard)/dashboard/",
        "app/(dashboard)/documents/page.tsx",
        "app/(dashboard)/documents/[documentId]/page.tsx",
        "app/(dashboard)/documents/[documentId]/preview/",
        "app/(dashboard)/documents/[documentId]/processing/",
        "app/(dashboard)/chat/page.tsx",
        "app/(dashboard)/chat/[conversationId]/page.tsx",
        "app/(dashboard)/search/",
        "app/(dashboard)/usage/",
        "app/(dashboard)/settings/profile/",
        "app/(dashboard)/settings/security/",
        "app/layout.tsx",
        "features/dashboard/",
        "features/documents/",
        "features/chat/",
        "features/search/",
        "features/usage/",
        "features/settings/",
        "components/layout/",
        "components/navigation/",
        "components/data-display/",
        "components/feedback/",
        "hooks/",
        "stores/",
        "lib/api/",
        "lib/query-client.ts",
        "lib/query-keys.ts",
        "lib/utils/",
        "middleware.ts"
    ],
    "apps/admin": [
        "app/login/",
        "app/dashboard/",
        "app/users/",
        "app/documents/",
        "app/jobs/",
        "app/usage/",
        "app/feedback/",
        "app/audit-logs/",
        "app/system/",
        "app/settings/",
        "features/dashboard/",
        "features/users/",
        "features/documents/",
        "features/jobs/",
        "features/usage/",
        "features/feedback/",
        "features/audit-logs/",
        "features/system/",
        "features/settings/",
        "components/layout/",
        "components/navigation/",
        "components/data-display/",
        "components/feedback/",
        "hooks/",
        "stores/",
        "lib/api/",
        "lib/query-client.ts",
        "lib/query-keys.ts",
        "lib/utils/",
        "middleware.ts"
    ],
    "apps/api": [
        "app/main.py",
        "app/core/config.py",
        "app/core/security.py",
        "app/core/logging.py",
        "app/core/exceptions.py",
        "app/core/middleware.py",
        "app/core/dependencies.py",
        "app/db/session.py",
        "app/db/base.py",
        "app/db/models/user.py",
        "app/db/models/document.py",
        "app/db/models/document_chunk.py",
        "app/db/models/conversation.py",
        "app/db/models/message.py",
        "app/db/models/citation.py",
        "app/db/models/job.py",
        "app/db/models/usage.py",
        "app/db/repositories/",
        "app/domains/auth/",
        "app/domains/users/",
        "app/domains/documents/",
        "app/domains/conversations/",
        "app/domains/search/",
        "app/domains/usage/",
        "app/domains/admin/",
        "app/ai/providers/base.py",
        "app/ai/providers/openai.py",
        "app/ai/providers/anthropic.py",
        "app/ai/embeddings/service.py",
        "app/ai/embeddings/models.py",
        "app/ai/rag/retriever.py",
        "app/ai/rag/reranker.py",
        "app/ai/rag/context_builder.py",
        "app/ai/rag/citation_validator.py",
        "app/ai/prompts/chat.py",
        "app/ai/prompts/summarization.py",
        "app/ai/prompts/extraction.py",
        "app/ai/schemas/chat.py",
        "app/ai/schemas/extraction.py",
        "app/ai/tools/",
        "app/ai/pipelines/document_processing.py",
        "app/ai/pipelines/chat.py",
        "app/jobs/tasks/",
        "app/jobs/retry.py",
        "app/jobs/queue.py",
        "app/jobs/scheduler.py",
        "app/storage/base.py",
        "app/storage/r2.py",
        "app/storage/s3.py",
        "app/storage/presigned.py",
        "app/storage/validators.py",
        "app/observability/",
        "app/utils/",
        "worker/",
        "tests/",
        "migrations/",
        "pyproject.toml",
        "Dockerfile"
    ],
    "packages/ui": [
        "package.json",
        "src/index.ts"
    ],
    "packages/api-client": [
        "package.json",
        "src/client.ts",
        "src/errors.ts",
        "src/interceptors.ts",
        "src/modules/auth.ts",
        "src/modules/users.ts",
        "src/modules/documents.ts",
        "src/modules/conversations.ts",
        "src/modules/search.ts",
        "src/modules/usage.ts",
        "src/modules/admin.ts",
        "src/index.ts"
    ],
    "packages/types": [
        "package.json",
        "src/auth.ts",
        "src/user.ts",
        "src/document.ts",
        "src/conversation.ts",
        "src/message.ts",
        "src/citation.ts",
        "src/usage.ts",
        "src/admin.ts",
        "src/api.ts",
        "src/index.ts"
    ],
    "packages/validation": [
        "package.json",
        "src/auth/",
        "src/users/",
        "src/documents/",
        "src/conversations/",
        "src/index.ts"
    ],
    "packages/auth": [
        "package.json",
        "src/index.ts"
    ],
    "packages/config": [
        "package.json",
        "src/index.ts"
    ],
    "docs": [
        "architecture.md",
        "api.md",
        "database.md",
        "authentication.md",
        "ai.md",
        "rag.md",
        "security.md",
        "deployment.md",
        "development.md"
    ],
    "infrastructure": [
        "docker/",
        "scripts/"
    ],
    ".github/workflows": [
        "ci.yml",
        "lint.yml",
        "test.yml"
    ],
    ".": [
        "package.json",
        "pnpm-workspace.yaml",
        "turbo.json",
        ".gitignore",
        ".env.example",
        "README.md"
    ]
}

create_structure(workspace, scaffold)

# Now, for features in app and admin:
feature_files = [
    "components/",
    "hooks/",
    "queries/",
    "mutations/",
    "schemas/",
    "types/",
    "utils/",
    "index.ts"
]

for app in ["apps/app", "apps/admin"]:
    features_dir = os.path.join(workspace, app, "features")
    if os.path.exists(features_dir):
        for feature in os.listdir(features_dir):
            feature_path = os.path.join(features_dir, feature)
            if os.path.isdir(feature_path):
                for ff in feature_files:
                    if ff.endswith("/"):
                        os.makedirs(os.path.join(feature_path, ff), exist_ok=True)
                    else:
                        file_path = os.path.join(feature_path, ff)
                        if not os.path.exists(file_path):
                            with open(file_path, 'w') as f:
                                pass

# Now, for domains in api:
domain_files = [
    "domain/entities.py",
    "domain/enums.py",
    "domain/value_objects.py",
    "domain/constants.py",
    "domain/exceptions.py",
    "schemas/create.py",
    "schemas/update.py",
    "schemas/response.py",
    "schemas/filters.py",
    "repositories/interface.py",
    "repositories/postgres.py",
    "services/",
    "queries/",
    "commands/",
    "api/router.py",
    "tests/"
]

api_domains_dir = os.path.join(workspace, "apps/api/app/domains")
if os.path.exists(api_domains_dir):
    for domain in os.listdir(api_domains_dir):
        domain_path = os.path.join(api_domains_dir, domain)
        if os.path.isdir(domain_path):
            for df in domain_files:
                if df.endswith("/"):
                    os.makedirs(os.path.join(domain_path, df), exist_ok=True)
                else:
                    file_path = os.path.join(domain_path, df)
                    os.makedirs(os.path.dirname(file_path), exist_ok=True)
                    if not os.path.exists(file_path):
                        with open(file_path, 'w') as f:
                            pass

# Ensure JSONs have basic {} so they don't break turborepo setup? The instructions say "placeholder files" or "DO NOT write implementation code", but an empty package.json is invalid json. I will just leave them empty for now unless turborepo specifically requires it, but empty is safe. Wait, for package.json, an empty file might break some tools, but let's just make them {}.

import json
for root, dirs, files in os.walk(workspace):
    for file in files:
        if file == 'package.json' or file == 'turbo.json':
            filepath = os.path.join(root, file)
            if os.path.getsize(filepath) == 0:
                with open(filepath, 'w') as f:
                    if file == 'package.json':
                        pkg_name = os.path.basename(os.path.dirname(filepath))
                        if pkg_name == os.path.basename(workspace):
                            pkg_name = "root"
                        f.write(json.dumps({"name": pkg_name, "version": "0.0.0"}))
                    else:
                        f.write("{}")

print("Scaffolding complete.")
