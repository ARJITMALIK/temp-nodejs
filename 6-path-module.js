const path = require('path');

console.log(path.sep);
// system's path separator

const filePath = path.join('/content', 'subfolder', 'text.txt');
// note - if u use '/content/' instead of just '/content' it will automatically format corrects it
console.log(filePath);

//base name - last portion
const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);
