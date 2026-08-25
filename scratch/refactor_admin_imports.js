const fs = require('fs');
const path = require('path');

const appDir = 'apps/admin/app';

// Find all .tsx files
const pages = [];
function findPages(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            findPages(fullPath);
        } else if (file.endsWith('.tsx')) {
            pages.push(fullPath);
        }
    }
}
findPages(appDir);

for (const page of pages) {
    let content = fs.readFileSync(page, 'utf8');
    
    // Replace all matching imports
    content = content.replace(/from "\.\.\/\.\.\/\.\.\/modules\/[^"]+"/g, 'from "@workspace/admin-features"');
    content = content.replace(/from "\.\.\/modules\/[^"]+"/g, 'from "@workspace/admin-features"');
    content = content.replace(/from "\.\.\/\.\.\/modules\/[^"]+"/g, 'from "@workspace/admin-features"');

    fs.writeFileSync(page, content);
}
