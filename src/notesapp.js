// importing libraries fileSystem , Validator , chalk
const fs = require('fs');
const validator = require('validator');


function filefunction() {
    // create a file and put inputs
    fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
    console.log('File is created');

    // modifying the file and adding inputs
    fs.appendFileSync('notes.txt', '\nThis is the Append text for file.');
    console.log('File is Appended !')
}


module.exports(filefunction);