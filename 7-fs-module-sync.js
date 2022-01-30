const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');


// generally the encoding is utf-8
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

// writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`); //NOTE: this is for write next one is for append
writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' });
