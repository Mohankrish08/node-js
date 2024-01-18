// importing file using require module
const path = require('path')
const fs = require('fs')

// reading the file
fs.readFile(path.join(__dirname, 'files', 'start.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

// writing the file and appending operation 
fs.writeFile(path.join(__dirname, 'files', 'write.txt'), 'Welcome to Node.js tutorial', (err) => {
    if (err) throw err;
    console.log('File completed');

    // Now, append to the file
    fs.appendFile(path.join(__dirname, 'files', 'write.txt'), '\nappend operation', (err) => {
        if (err) throw err;
        console.log('Append completed');
    });

    // rename the file
    fs.rename(path.join(__dirname, 'files', 'write.txt'), path.join(__dirname, 'files', 'rename.txt'), (err) => {
        if (err) throw err;
        console.log('Rename completed');
    });
});

// caught on errors
process.on('uncaughtException', err => {
    console.error(`Error: ${err}`);
    process.exit(1);
});