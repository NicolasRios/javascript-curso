const moduleA = require("./moduleA");
const moduleB = require("./moduleB");


console.log(moduleA.ola)
console.log(moduleA.bemVindo)
console.log(moduleA.ateLogo)
console.log(moduleA)

console.log(moduleB.bomDia)
console.log(moduleB.boaNoite)
console.log(moduleB.boaNoite())
console.log(moduleB)


const _= require('lodash')
setInterval(() => console.log(_.random(1, 60)), 2000)