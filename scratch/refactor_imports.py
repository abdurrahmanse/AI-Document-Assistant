import os
import glob
import re

app_dir = "apps/web/app"
pages = glob.glob(f"{app_dir}/**/page.tsx", recursive=True)

for page in pages:
    with open(page, "r") as f:
        content = f.read()
    
    # Replace any relative imports containing /modules/ with @workspace/marketing
    # e.g., "../../../modules/contact/components/contact-info" -> "@workspace/marketing"
    new_content = re.sub(r'from "\.\./\.\./\.\./modules/[^"]+"', 'from "@workspace/marketing"', content)
    new_content = new_content.replace('from "../modules/core/components/layout/header"', 'from "@workspace/marketing"')
    new_content = new_content.replace('from "../modules/core/components/layout/footer"', 'from "@workspace/marketing"')
    new_content = new_content.replace('from "../modules/home/components/hero"', 'from "@workspace/marketing"')
    new_content = new_content.replace('from "../modules/home/components/social-proof"', 'from "@workspace/marketing"')
    new_content = new_content.replace('from "../modules/home/components/features-grid"', 'from "@workspace/marketing"')
    new_content = new_content.replace('from "../modules/home/components/interactive-demo"', 'from "@workspace/marketing"')

    
    with open(page, "w") as f:
        f.write(new_content)
