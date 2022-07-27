const sum = (a, b) => {
    console.log(a + b);
}
const mul = (a, b) => {
    console.log(a * b);
}
const sub = (a, b) => {
    console.log(a - b);
}
const div = (a, b) => {
    console.log(a / b);
}
const random = () => {
    console.log(Math.floor(Math.random() * 100));
}
module.exports = { sum, mul, sub, div, random };