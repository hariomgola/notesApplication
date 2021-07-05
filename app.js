// Entry point of the application
// importing chalk library
const chalk = require('chalk');





function printData(param){
    let data = {
        name : 'Hari',
        Designation : 'Software Developer',
        frontend : 'Angular',
        Backend : 'node'
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

printData('data');
