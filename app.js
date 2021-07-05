// Entry point of the application
// importing chalk library
const chalk = require('chalk');
const yargs = require('yargs');
// const notesapp = require('./src/notesapp');

//getting value from the command line using global variable
const command = process.argv;



/**
 * Creating add,remove,list,read command
 * 'Help' of yargs npm module
 * 'Command' use command cli
 * 'describe' use what command used for
 * 'handler' use what that command will do
 * 'builder' is an object and own that object we can define the title here
 */
//----------------------- Customize yargs version --------------------------//
yargs.version('1.2.0');

// Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Add Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Add note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        // console.log('Adding a new note!',argv)
        console.log(chalk.blueBright('------------Adding a new note----------'));
        console.log(`Title:${argv.title}`);
        console.log(`Body:${argv.body}`)
    }
})

// Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note');
    }
})

// Creating List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log('List of note');
    }
})

// Creating read command
yargs.command({
    command: 'read',
    describe: 'Read a list',
    handler: function () {
        console.log('Reading a list');
    }
})


yargs.parse()

//--------------------- Customize yargs version --------------------------//




// function commandNotes(){
//     let customCommand = command[2];
//     if(customCommand === 'add'){
//         console.log(chalk.green('Adding Note!'));
//     }
//     if(customCommand === 'remove'){
//         console.log(chalk.red('Removing Notes!'));
//     }
// }

// commandNotes();














/**
 * Creating printData function to print data With the help of chalk npm module
 * @param {any} param 
 */
// ------------------- Chalk function ----------------------- //
// function of make use of chalk library
function printData(param) {
    let data = {
        name: 'Hari',
        Designation: 'Software Developer',
        frontend: 'Angular',
        Backend: 'node'
    }
    // printing all data using chalk library
    console.log(chalk.red(data.name));
    console.log(chalk.green(data.Designation));
    console.log(chalk.yellow(data.frontend));
    console.log(chalk.blue(data.Backend));

    // Background color printing
    console.log(chalk.bgRed(data.name));
    console.log(chalk.bgGreen(data.Designation));
    console.log(chalk.bgYellow(data.frontend));
    console.log(chalk.bgBlue(data.Backend));

    // End
    let msg = chalk.green.inverse.bold('printData Success!');
    console.log(msg);
}
// ------------------- Chalk function ----------------------- //