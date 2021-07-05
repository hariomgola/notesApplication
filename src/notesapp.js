// importing libraries fileSystem , Validator , chalk
const fs = require('fs');
const validator = require('validator');
const fileName = 'notes.json'
const filePath = './notes.json'

// functionality method
fileManipulation(dataJSON);
console.log(readFile())

// Temp Data
let data = {
    title: 'Motivational Quote',
    author: 'hari',
    body: 'Great things never come from comfort zone'
}
let dataJSON = JSON.stringify(data);

/**
 * Main Function to manipulate file
 */
function fileManipulation(data) {
    console.log('->  Insert data start');
    checkFile();
    let _fileData = readFile();

    // Creating data
    _fileData[`Note - ${Object.keys(_fileData).length}`] = `${data}`;
    _fileData = JSON.stringify(_fileData);

    // writting data
    writeData(_fileData);

    console.log('->  Insert data Complete');
}

/**
 * function to check wheather file is present of not
 * Author : hariom gola
 */
function checkFile() {
    if (fs.existsSync(filePath)) {
        console.log('->  File is Present ');
    }
    else {
        console.log('->  File is Not Present');
        createFile();
    }
}

/**
 * Function to create new file
 * Author : hariom gola
 */
function createFile() {
    console.log('->  Creating a new file');
    fs.writeFileSync(filePath, '{}');
}

/**
 * function used to write down data into file
 * Author : hariom gola
 */
function writeFile(note) {
    console.log('->  Writing data into file');
    fs.appendFileSync(filePath, note);
    fs.appendFileSync(filePath, ',\n')
}

/**
 * function to read data from file
 * Author : hariom gola
 */
function readFile() {
    console.log('->  Reading data from file');
    let fileData = fs.readFileSync(filePath, { encoding: "utf8" });
    fileData = JSON.parse(fileData);
    return fileData;
}

/**
 * function to insert full new data into file
 * Author : hariom gola
 */
function writeData(data) {
    console.log('->  Writting data into file');
    fs.writeFileSync(filePath, data);
}

/**
 * Function to export all data into desktop
 * Author : hariom gola
 */
function exportNotes(path) {
    console.log('->  Exporting notes Data file')
    let _exportData = JSON.stringify(readFile());
    fs.writeFileSync(path, _exportData);
}