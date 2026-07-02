const fs = require('fs');

let content = fs.readFileSync('components/sections/products.tsx', 'utf8');

const replacements = [
  { regex: /name: "DSCON/g, replacement: 'name: "LP-CON' },
  { regex: /name: "M70/g, replacement: 'name: "LP-M70' },
  { regex: /name: "M60/g, replacement: 'name: "LP-M60' },
  { regex: /name: "NKB/g, replacement: 'name: "LP-KB' },
  { regex: /name: "NVD/g, replacement: 'name: "LP-VD' },
  { regex: /name: "NEB/g, replacement: 'name: "LP-EB' },
  { regex: /name: "LS/g, replacement: 'name: "LP-LS' },
  { regex: /name: "DHI-LDH/g, replacement: 'name: "LP-DH' },
  { regex: /name: "LDH/g, replacement: 'name: "LP-DH' },
  { regex: /name: "LDV/g, replacement: 'name: "LP-DV' },
  { regex: /name: "DS04/g, replacement: 'name: "LP-DS04' },
  { regex: /name: "LD-AI-W/g, replacement: 'name: "LP-AI-W' },
  { regex: /name: "PVM/g, replacement: 'name: "LP-VM' },
  { regex: /name: "DHI-PH/g, replacement: 'name: "LP-' },
  { regex: /name: "PH/g, replacement: 'name: "LP-' },
  { regex: /name: "IFS-/g, replacement: 'name: "LP-' },
];

for (const { regex, replacement } of replacements) {
  content = content.replace(regex, replacement);
}

fs.writeFileSync('components/sections/products.tsx', content);

let navContent = fs.readFileSync('components/navigation/products-dropdown.tsx', 'utf8');
for (const { regex, replacement } of replacements) {
  navContent = navContent.replace(regex, replacement);
}
// also replace plain text in products-dropdown
navContent = navContent.replace(/>DSCON/g, '>LP-CON');
navContent = navContent.replace(/alt="DSCON/g, 'alt="LP-CON');
fs.writeFileSync('components/navigation/products-dropdown.tsx', navContent);
