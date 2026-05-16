const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Harish\\.gemini\\antigravity\\brain\\97637cc5-3edf-4903-b627-e99cfe63e627';
const destDir = path.join(__dirname, 'images');

const files = [
  ['chicken_momos_1778233025805.png', 'chicken_momos.png'],
  ['chicken_cheese_momos_1778233044300.png', 'chicken_cheese_momos.png'],
  ['chicken_fry_momos_1778233060991.png', 'chicken_fry_momos.png'],
  ['veg_momos_1778233077093.png', 'veg_momos.png'],
  ['veg_cheese_momos_1778233093947.png', 'veg_cheese_momos.png'],
  ['veg_fry_momos_1778233113002.png', 'veg_fry_momos.png'],
];

files.forEach(([src, dest]) => {
  const srcPath = path.join(srcDir, src);
  const destPath = path.join(destDir, dest);
  try {
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${src} -> ${dest}`);
  } catch(e) {
    console.error(`Failed to copy ${src}: ${e.message}`);
  }
});

console.log('Done!');
