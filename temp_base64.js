const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'public', 'assets', 'Blog_1.jpg');
const buffer = fs.readFileSync(filePath);
const base64 = buffer.toString('base64');
console.log(`data:image/jpeg;base64,${base64}`);
