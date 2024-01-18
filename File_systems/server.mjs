// importing a module using node:fs
import { read, readFile } from 'node:fs';


readFile('files/start.txt', (err, data) => {
    if (err) throw err;
    // we specifiy the .toString() function to return the text in the .txt file
    console.log(data.toString())

})

console.log('-------------------------------------------------')

// we can do this by specfiying the encoding to return the actual text in the .txt file.


readFile('files/startt.txt', 'UTF-8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

// exit on uncaught errors

process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1)
})