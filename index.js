const { sum, mul, div, sub } = require("./test.js");
const args = require("yargs");
let [operation, num1, num2] = args.argv._;

switch (operation) {
    case "sum": sum(num1, num2); break;
    case "mul": mul(num1, num2); break;
    case "div": div(num1, num2); break;
    case "sub": sub(num1, num2); break;
}