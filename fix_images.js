const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'components/sections/hero.tsx',
  'components/sections/portfolio.tsx',
  'components/sections/services.tsx',
  'components/sections/solutions.tsx',
  'components/sections/products.tsx',
  'components/sections/blog.tsx',
  'components/sections/about.tsx',
  'components/blog/blog-article-page.tsx'
];

filesToUpdate.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    let hasChanges = false;

    // Add import if missing and there is an <img to replace
    if (content.includes('<img') && !content.includes('next/image')) {
      const importRegex = /^import .+?;?$/m;
      let lastImportMatch;
      let match;
      const regex = new RegExp(importRegex, 'gm');
      while ((match = regex.exec(content)) !== null) {
        lastImportMatch = match;
      }

      const importStatement = `import Image from "next/image"\n`;
      if (lastImportMatch) {
        const insertPos = lastImportMatch.index + lastImportMatch[0].length + 1;
        content = content.slice(0, insertPos) + importStatement + content.slice(insertPos);
      } else {
        // Fallback: put at the top of the file
        // skip "use client" if present
        const lines = content.split('\n');
        let insertIndex = 0;
        if (lines[0].includes('use client')) {
           insertIndex = 1;
        }
        lines.splice(insertIndex, 0, importStatement);
        content = lines.join('\n');
      }
      hasChanges = true;
    }

    // Replace <img with <Image
    if (content.includes('<img ')) {
        content = content.replace(/<img([\s\S]*?)\/>/g, (match, attrs) => {
            let newAttrs = attrs;

            // If it has absolute inset-0 but missing width/height/fill, add fill
            if (newAttrs.includes('absolute') && !newAttrs.includes('width=') && !newAttrs.includes('fill')) {
                newAttrs += ' fill';
            }
            
            // For next/image size props support inside the blog-article-page or others where width/height are needed 
            // if no absolute/fill is present, we should add width and height but this is hard to guess. 
            // Let's assume most use absolute inset-0 or already have width/height.
            if (!newAttrs.includes('absolute') && !newAttrs.includes('width=') && !newAttrs.includes('fill')) {
                 newAttrs += ' width={800} height={600}'; // safe fallback
            }

            return `<Image${newAttrs}/>`;
        });
        hasChanges = true;
    }

    if (hasChanges) {
      fs.writeFileSync(fullPath, content);
      console.log(`Updated: ${filePath}`);
    }
  }
});

console.log("Done.");
