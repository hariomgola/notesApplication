// Entry point of the application
// importing chalk library
const chalk = require('chalk');
const yargs = require('yargs');
const notesapp = require('./src/notesapp');

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
        console.log(chalk.magenta('------------Adding a new note----------'));
        let author = 'Hariom gola'
        notesapp.filedata(author, argv.title, argv.body);
        console.log(chalk.magenta('-----------Adding Data Complete---------'));
    }
})

// Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Remove Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.magenta('-------------Removing the note-----------'));
        let title = argv.title;
        notesapp.removenote(title);
        console.log(chalk.magenta('----------Removing the note Complete------'));
    }
})

// Creating List command
yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function () {
        console.log(chalk.magenta('---------------List of note-------------'));
        notesapp.notelist();
        console.log(chalk.magenta('-----------List of note completed---------'));
    }
})

// Creating read command
yargs.command({
    command: 'read',
    describe: 'Read a list',
    builder: {
        title: {
            describe: 'Reading Note Description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log(chalk.magenta('---------------Reading a list------------'));
        let title = argv.title;
        notesapp.readnote(title);
        console.log(chalk.magenta('-------------Reading a list Ends---------'));
    }
})


yargs.parse()

//--------------------- Customize yargs version --------------------------//