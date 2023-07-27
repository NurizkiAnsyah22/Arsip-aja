const AlertService = require("./src/app/alert.service");
const run = require("./src/app/app");
const CalculatorService = require("./src/app/calculator.service");
const jokesService = require("./src/app/jokes.service");



const alertService = new AlertService();
const calculatorService = new CalculatorService();
const jokesService = new JokesService();
run(AlertService, CalculatorService, JokesService);
