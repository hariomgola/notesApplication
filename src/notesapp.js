// importing libraries fileSystem , Validator , chalk
const fs = require('fs');
const chalk = require('chalk');
const validator = require('validator');
const fileName = 'notes.json'
const filePath = './notes.json'
const backUpPath = './backup.txt'




/**
 * Main Function to manipulate file
 */
function fileManipulation(data) {
    console.log(chalk.magenta('->  Insert data start'));
    checkFile();
    let _fileData = readFile();

    // Creating data
    _fileData[`Note - ${Object.keys(_fileData).length}`] = `${data}`;
    _fileData = JSON.stringify(_fileData);

    // writting data
    writeData(_fileData);

    console.log(chalk.magenta('->  Insert data Complete'));
}

/**
 * Function to prepare jsonData and pass it to function
 */
function fileData(author, title, body) {
    console.log(chalk.magenta('->  Creating Data for File'))
    // let data = {
    //     title: 'Motivational Quote',
    //     author: 'hari',
    //     body: 'Great things never come from comfort zone'
    // }
    let data = {
        title: title,
        author: author,
        body: body
    }
    data = JSON.stringify(data);
    fileManipulation(data);
}

/**
 * function to check wheather file is present of not
 * Author : hariom gola
 */
function checkFile() {
    if (fs.existsSync(filePath)) {
        console.log(chalk.magenta('->  File is Present '));
    }
    else {
        console.log(chalk.magenta('->  File is Not Present'));
        createFile();
    }
}

/**
 * Function to create new file
 * Author : hariom gola
 */
function createFile() {
    console.log(chalk.magenta('->  Creating a new file'));
    fs.writeFileSync(filePath, '{}');
}

/**
 * function used to write down data into file
 * Author : hariom gola
 */
function writeFile(note) {
    console.log(chalk.magenta('->  Writing data into file'));
    fs.appendFileSync(filePath, note);
    fs.appendFileSync(filePath, ',\n')
}

/**
 * function to read data from file
 * Author : hariom gola
 */
function readFile() {
    console.log(chalk.magenta('->  Reading data from file'));
    let fileData = fs.readFileSync(filePath, { encoding: "utf8" });
    fileData = JSON.parse(fileData);
    return fileData;
}

/**
 * function to insert full new data into file
 * Author : hariom gola
 */
function writeData(data) {
    console.log(chalk.magenta('->  Writting data into file'));
    fs.writeFileSync(filePath, data);
}

/**
 * Function to export all data into desktop
 * Author : hariom gola
 */
function exportNotes(path) {
    console.log(chalk.magenta('->  Exporting notes Data file'));
    let _exportData = JSON.stringify(readFile());
    fs.writeFileSync(path, _exportData);
}

/**
 * Function to Remove note from the file
 */
function removeNote(_title) {
    let _filedata = readFile();
    let removeflag = true;
    for (let _data in _filedata) {
        let tempdata = JSON.parse(_filedata[_data]);
        if (tempdata.title == _title) {
            removeflag = false;
            // Creating backup data
            let _backup = {}
            _backup[`${_data}`] = _filedata[_data];
            backUp(JSON.stringify(_backup));

            // deleting data
            console.log(chalk.red(`Deleting title : ${_title} data from file`));
            let date = new Date();
            let deletedata = {
                title: 'remove',
                description: `removed on -> ${date}`
            }
            _filedata[_data] = JSON.stringify(deletedata)
        }
    }
    if (removeflag) {
        console.log(chalk.green(`(---------No Data found with title:${_title}--------)`));
        console.log(chalk.green(`(--------Please run list command to check notes-----)`))
    }
    if (!removeflag) {
        // Inserting Data after delete
        _filedata = JSON.stringify(_filedata);
        fs.writeFileSync(filePath, _filedata);
    }
}
/**
 * Function to Create backup note file
 */
function backUp(_backup) {
    if (!fs.existsSync(backUpPath)) {
        fs.writeFileSync(backUpPath, '');
    }
    fs.appendFileSync(backUpPath, _backup);
    fs.appendFileSync(backUpPath, ',\n')
    console.log(chalk.green('->  Creating backup for delete data'));
}

module.exports = {
    filedata: fileData,
    removenote: removeNote
}