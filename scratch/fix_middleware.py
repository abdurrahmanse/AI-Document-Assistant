import os

workspace = "/Volumes/Fullstack/Github/AI-Document-Assistant"

content = """import { NextResponse } from "next/server";

export function middleware() {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
"""

for root, dirs, files in os.walk(os.path.join(workspace, "apps")):
    for file in files:
        if file == "middleware.ts":
            path = os.path.join(root, file)
            with open(path, "w") as f:
                f.write(content)

print("middleware.ts fixed properly.")
