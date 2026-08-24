import os

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"
packages = ["api-client", "types", "validation", "auth", "config"]

eslint_content = """import { config } from "@workspace/eslint-config/base";

export default config;
"""

for pkg in packages:
    pkg_dir = os.path.join(workspace, "packages", pkg)
    with open(os.path.join(pkg_dir, "eslint.config.mjs"), "w") as f:
        f.write(eslint_content)

print("eslint.config.mjs created for all shared packages.")
