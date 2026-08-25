const fs = require('fs');
const path = require('path');

const appDir = 'apps/web/app';

// Find all page.tsx files
const pages = [];
function findPages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findPages(fullPath);
        } else if (file === 'page.tsx') {
            pages.push(fullPath);
        }
    }
}
findPages(appDir);

for (const page of pages) {
    let content = fs.readFileSync(page, 'utf8');
    
    // Replace all matching imports
    content = content.replace(/from "\.\.\/\.\.\/\.\.\/modules\/[^"]+"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/core\/components\/layout\/header"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/core\/components\/layout\/footer"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/home\/components\/hero"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/home\/components\/social-proof"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/home\/components\/features-grid"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/modules\/home\/components\/interactive-demo"/g, 'from "@workspace/marketing"');
    content = content.replace(/from "\.\.\/\.\.\/modules\/[^"]+"/g, 'from "@workspace/marketing"');

    fs.writeFileSync(page, content);
}
