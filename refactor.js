const fs = require('fs');
const path = require('path');

const dir = 'c:/Btech/Freelance/aztech_redesign/components/sections';
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (!file.endsWith('.tsx')) return;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // If it still has the old useState and useRef logic for visibility
  if (content.includes('const [isVisible, setIsVisible] = useState(false)') || content.includes('const [isVisible, setIsVisible] = useState(false)')) {

    console.log('Processing:', file);

    // 1. Add import safely at the top after other imports
    if (!content.includes('useReveal')) {
      const importIndex = content.lastIndexOf('import ');
      const endOfImport = content.indexOf('\n', importIndex);
      content = content.slice(0, endOfImport + 1) + 'import { useReveal } from "@/hooks/use-reveal"\n' + content.slice(endOfImport + 1);
    }
    
    // 2. Replace const [isVisible...] and const ref = ... with useReveal()
    content = content.replace(/const\s+\[isVisible,\s*setIsVisible\]\s*=\s*useState\(false\)\n\s*const\s+ref\s*=\s*useRef(?:<[^>]+>)?\(null\)/, 'const { ref, isVisible } = useReveal()');

    // 3. Remove the entire useEffect block associated with IntersectionObserver
    // This regex looks for useEffect(() => { const observer = new IntersectionObserver... }, [])
    content = content.replace(/useEffect\(\(\)\s*=>\s*\{\s*(?:const\s+observer|let\s+observer)[^]*?return\s*\(\)\s*=>\s*observer\.disconnect\(\)\s*\}\s*,\s*\[\]\)/, '');
    
    // Remove isolated empty lines created by removals
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed:', file);
  }
});
