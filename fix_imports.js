const fs = require('fs');
const path = require('path');

const dir = 'c:/Btech/Freelance/aztech_redesign/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the bad import we introduced earlier
  const hasBadImport = content.match(/import\s*\{\s*\n?import\s*\{\s*useReveal\s*\}\s*from/);
  
  if (hasBadImport) {
    console.log('Fixing:', file);
    // Remove the orphaned "import {"
    content = content.replace(/import\s*\{\s*\n?import\s*\{\s*useReveal\s*\}\s*from\s*"@\/hooks\/use-reveal"/, 'import { useReveal } from "@/hooks/use-reveal"');
    // Save
    fs.writeFileSync(filePath, content, 'utf8');
  } else {
    // Just blindly try to clean up any "import {" without from
    const badRegex = /import\s*\{\s*(?:\r?\n)+\s*import/g;
    if (badRegex.test(content)) {
        console.log('Fixing weird import in:', file);
        content = content.replace(badRegex, 'import');
        fs.writeFileSync(filePath, content, 'utf8');
    }
  }
});
