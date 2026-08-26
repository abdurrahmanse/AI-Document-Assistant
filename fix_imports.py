import os
import re

def fix_imports(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if not file.endswith('.tsx') and not file.endswith('.ts'):
                continue
                
            filepath = os.path.join(root, file)
            with open(filepath, 'r') as f:
                content = f.read()
                
            # Replace @workspace/ui/components/xxx with @workspace/ui/components/ui
            new_content = re.sub(r"['\"]@workspace/ui/components/(?!ui/)[^'\"]+['\"]", r"'@workspace/ui/components/ui'", content)
            
            # Replace @/components/ui/xxx with @workspace/ui/components/ui
            new_content = re.sub(r"['\"]@/components/ui/[^'\"]+['\"]", r"'@workspace/ui/components/ui'", new_content)
            
            # Also fix unused vars reported by tsc
            if "dashboard/page.tsx" in filepath:
                new_content = new_content.replace(", CardDescription", "")
            
            if "components/document-uploader.tsx" in filepath:
                new_content = new_content.replace(", isUploading", "")
                
            if "ChatInterface.tsx" in filepath or "search/page.tsx" in filepath:
                new_content = new_content.replace("handleSearch = (e)", "handleSearch = (e: React.FormEvent)")
                new_content = new_content.replace("onKeyDown={(e)", "onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>)")
                
            if new_content != content:
                with open(filepath, 'w') as f:
                    f.write(new_content)
                print(f"Fixed {filepath}")

fix_imports("apps/app")
