let upper = 25;
let lower = 7;
let divid = upper/lower;
//toFixed(3) number inside the parenthesis will decide how much amount of decimel point we need in output
console.log(divid.toFixed(3))
let floatRes = divid.toFixed(3)
// it will bring the value on the top on decimal
console.log(Math.floor(floatRes))
// it will bring the last part of the decimal
console.log(Math.ceil(floatRes))

console.log(Math.floor((Math.random() * ((upper - lower) + 1) + lower)))

