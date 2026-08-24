import os

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"
apps = ["web", "app", "admin"]

for app in apps:
    pjson_path = os.path.join(workspace, "apps", app, "package.json")
    with open(pjson_path, "r") as f:
        content = f.read()
    content = content.replace('"lint": "next lint"', '"lint": "eslint . --max-warnings 0"')
    with open(pjson_path, "w") as f:
        f.write(content)

print("Updated lint scripts for apps.")
