const fs = require('fs');

const files = [
    "apps/web/app/(marketing)/docs/page.tsx",
    "apps/web/app/(marketing)/how-it-works/page.tsx",
    "apps/web/app/(marketing)/security/page.tsx",
    "apps/web/modules/contact/components/contact-info.tsx",
    "apps/web/modules/core/components/layout/desktop-nav.tsx",
    "apps/web/modules/core/components/layout/footer.tsx",
    "apps/web/modules/core/components/layout/mobile-nav.tsx",
    "apps/web/modules/docs/components/docs-card.tsx",
    "apps/web/modules/features/components/feature-card.tsx",
    "apps/web/modules/features/components/feature-deep-dive.tsx",
    "apps/web/modules/home/components/social-proof.tsx",
    "apps/web/modules/how-it-works/components/timeline-step.tsx",
    "apps/web/modules/security/components/security-bento-card.tsx"
];

for (const file of files) {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        content = content.replace(/as any\)/g, 'as React.ElementType)');
        fs.writeFileSync(file, content);
    }
}
