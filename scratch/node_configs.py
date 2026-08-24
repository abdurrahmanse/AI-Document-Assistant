import os
import json

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"
packages = ["api-client", "types", "validation", "auth", "config"]

base_package_json = {
  "name": "",
  "version": "0.0.0",
  "private": True,
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

base_tsconfig = {
  "extends": "@workspace/typescript-config/base.json",
  "compilerOptions": {
    "outDir": "dist"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}

for pkg in packages:
    pkg_dir = os.path.join(workspace, "packages", pkg)
    
    # Write package.json
    pjson = dict(base_package_json)
    pjson["name"] = f"@workspace/{pkg}"
    with open(os.path.join(pkg_dir, "package.json"), "w") as f:
        json.dump(pjson, f, indent=2)
        
    # Write tsconfig.json
    with open(os.path.join(pkg_dir, "tsconfig.json"), "w") as f:
        json.dump(base_tsconfig, f, indent=2)

# Update existing `@repo` to `@workspace`
for pkg in ["ui", "eslint-config", "typescript-config"]:
    pkg_dir = os.path.join(workspace, "packages", pkg)
    pjson_path = os.path.join(pkg_dir, "package.json")
    if os.path.exists(pjson_path):
        with open(pjson_path, "r") as f:
            content = f.read()
        content = content.replace("@repo/", "@workspace/")
        with open(pjson_path, "w") as f:
            f.write(content)

# Update apps
apps = ["web", "app", "admin"]
app_package_json = {
  "name": "",
  "version": "0.1.0",
  "private": True,
  "scripts": {
    "dev": "next dev --port 3000",
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

app_tsconfig = {
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

for app in apps:
    app_dir = os.path.join(workspace, "apps", app)
    
    # Write package.json
    pjson = dict(app_package_json)
    pjson["name"] = f"@workspace/{app}"
    if app == "web":
        pjson["scripts"]["dev"] = "next dev --port 3000"
    elif app == "app":
        pjson["scripts"]["dev"] = "next dev --port 3001"
    elif app == "admin":
        pjson["scripts"]["dev"] = "next dev --port 3002"
        
    with open(os.path.join(app_dir, "package.json"), "w") as f:
        json.dump(pjson, f, indent=2)
        
    # Write tsconfig.json
    with open(os.path.join(app_dir, "tsconfig.json"), "w") as f:
        json.dump(app_tsconfig, f, indent=2)
        
    # Write next.config.mjs
    with open(os.path.join(app_dir, "next.config.mjs"), "w") as f:
        f.write("/** @type {import('next').NextConfig} */\nconst nextConfig = {\n  transpilePackages: ['@workspace/ui'],\n};\nexport default nextConfig;\n")
        
    # Write .eslintrc.js
    with open(os.path.join(app_dir, ".eslintrc.js"), "w") as f:
        f.write("module.exports = {\n  extends: ['@workspace/eslint-config/next-js'],\n};\n")

print("Node configs updated successfully.")
