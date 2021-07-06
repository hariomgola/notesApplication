// importing chalk data
const chalk = require('chalk');

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


// function commandNotes(){
//     let customCommand = command[2];
//     if(customCommand === 'add'){
//         console.log(chalk.green('Adding Note!'));
//     }
//     if(customCommand === 'remove'){
//         console.log(chalk.red('Removing Notes!'));
//     }
// }

