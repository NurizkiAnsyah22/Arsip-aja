const validator = require("validator");
const chalk = require("chalk");

// console.log(validator.isEmail("nurizki@gmail.com"));
// console.log(validator.isMobilePhone("085156032825", "id-ID"));
// console.log(validator.isNumeric("085156032825"));
// console.log(chalk.italic.bgBlue("hello World"));
const nama = "nurizkiAnsyah";
const pesan = chalk`Lorem ipsum dolor {bgRed.white.bold sit amet} consectetur {bgBlue.italic.black adipisicing elit.} Aspernatur, dolor nama saya : ${nama}`;

console.log(pesan);
