import os

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"

page_content = """export default function Page() {
  return <div>Page Placeholder</div>;
}
"""

layout_content = """import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
"""

for root, dirs, files in os.walk(os.path.join(workspace, "apps")):
    for file in files:
        if file == "page.tsx":
            path = os.path.join(root, file)
            if os.path.getsize(path) == 0:
                with open(path, "w") as f:
                    f.write(page_content)
        elif file == "layout.tsx":
            path = os.path.join(root, file)
            if os.path.getsize(path) == 0:
                with open(path, "w") as f:
                    f.write(layout_content)
        elif file == "middleware.ts":
            path = os.path.join(root, file)
            with open(path, "r") as f:
                content = f.read()
            if "request: NextRequest" in content:
                content = content.replace("request: NextRequest", "_request: NextRequest")
                with open(path, "w") as f:
                    f.write(content)

print("Empty Next.js files populated.")
