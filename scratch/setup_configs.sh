#!/usr/bin/env bash
set -e

WORKSPACE="/Volumes/Fullstack/Github/AI-Document-Assistant"

# Packages
for PKG in api-client types validation auth config; do
  DIR="$WORKSPACE/packages/$PKG"
  mkdir -p "$DIR"
  cat > "$DIR/package.json" <<EOF
{
  "name": "@workspace/$PKG",
  "version": "0.0.0",
  "private": true,
  "exports": {
    ".": "./src/index.ts"
  },
  "scripts": {
    "lint": "eslint . --max-warnings 0",
    "check-types": "tsc --noEmit"
  },
  "devDependencies": {
    "@workspace/eslint-config": "workspace:*",
    "@workspace/typescript-config": "workspace:*",
    "@types/node": "^22.15.3",
    "eslint": "^9.39.1",
    "typescript": "5.9.2"
  }
}
EOF

  cat > "$DIR/tsconfig.json" <<EOF
{
  "extends": "@workspace/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
EOF
done

# Apps
for APP in web app admin; do
  DIR="$WORKSPACE/apps/$APP"
  mkdir -p "$DIR"
  
  if [ "$APP" = "web" ]; then PORT=3000; fi
  if [ "$APP" = "app" ]; then PORT=3001; fi
  if [ "$APP" = "admin" ]; then PORT=3002; fi

  cat > "$DIR/package.json" <<EOF
{
  "name": "@workspace/$APP",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --port $PORT",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "check-types": "tsc --noEmit"
  },
  "dependencies": {
    "@workspace/ui": "workspace:*",
    "next": "16.3.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@workspace/eslint-config": "workspace:*",
    "@workspace/typescript-config": "workspace:*",
    "@types/node": "^22.15.3",
    "@types/react": "19.2.2",
    "@types/react-dom": "19.2.2",
    "eslint": "^9.39.1",
    "eslint-config-next": "16.3.0",
    "typescript": "5.9.2"
  }
}
EOF

  cat > "$DIR/tsconfig.json" <<EOF
{
  "extends": "@workspace/typescript-config/nextjs.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

  cat > "$DIR/next.config.mjs" <<EOF
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
};
export default nextConfig;
EOF

  cat > "$DIR/.eslintrc.js" <<EOF
module.exports = {
  extends: ['@workspace/eslint-config/next-js'],
};
EOF
done

# Backend
mkdir -p "$WORKSPACE/apps/api"
cat > "$WORKSPACE/apps/api/package.json" <<EOF
{
  "name": "@workspace/api",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "dev": "uv run fastapi run app/main.py --port 8000",
    "lint": "uv run ruff check .",
    "format": "uv run ruff format .",
    "check-types": "uv run pyright"
  }
}
EOF

cat > "$WORKSPACE/apps/api/pyproject.toml" <<EOF
[project]
name = "api"
version = "0.1.0"
description = "FastAPI backend for AI Document Intelligence"
readme = "README.md"
requires-python = ">=3.12"
dependencies = [
    "fastapi>=0.115.0",
    "uvicorn>=0.30.6",
    "pydantic>=2.9.2"
]

[dependency-groups]
dev = [
    "ruff>=0.6.7",
    "pyright>=1.1.382",
    "pytest>=8.3.3"
]

[tool.ruff]
line-length = 100
target-version = "py312"
src = ["app"]

[tool.pyright]
include = ["app"]
pythonVersion = "3.12"
typeCheckingMode = "strict"
EOF

# Update existing `@repo/` references to `@workspace/`
for f in packages/ui/package.json packages/eslint-config/package.json packages/typescript-config/package.json; do
  if [ -f "$WORKSPACE/$f" ]; then
    sed -i '' 's/@repo\//@workspace\//g' "$WORKSPACE/$f"
  fi
done

echo "Bash config generated successfully."
