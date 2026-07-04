const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');
let changed = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.match(/southern manitoba/i)) {
    const newContent = content.replace(/southern manitoba/gi, 'Manitoba');
    fs.writeFileSync(f, newContent, 'utf8');
    changed++;
  }
});
console.log(`Updated ${changed} files.`);
