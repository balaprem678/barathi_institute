const path = require('path');
const fs = require('fs');

console.log('--- Server Path Check ---');
console.log('Process CWD:', process.cwd());
console.log('__dirname:', __dirname);

const publicPath = path.join(process.cwd(), 'public');
console.log('Public folder exists:', fs.existsSync(publicPath));

const uploadPath = path.join(publicPath, 'uploads/blogs');
console.log('Uploads/blogs folder exists:', fs.existsSync(uploadPath));

if (fs.existsSync(uploadPath)) {
    const files = fs.readdirSync(uploadPath);
    console.log(`Files in ${uploadPath}:`, files.slice(0, 5));
}

// Check for a specific known file from user's ls output
const testFile = '1772462363129_aboutus.avif';
const testFilePath = path.join(uploadPath, testFile);
console.log(`Checking for ${testFile}:`, fs.existsSync(testFilePath));

console.log('--- End Check ---');
