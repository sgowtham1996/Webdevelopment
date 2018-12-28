const sayHello = function(name) {
  return "hey there! " +name + "!"
}

console.log(sayHello('Gowtham'));

//function using arrow function 
const say = (name) =>{return `hey there! ${name} !`} 
 
console.log(say('Gowtham'));
//arrow function is still reduced by return and taking brackets neglected 
const sa = (name) => `hey there! ${name} !`
 
console.log(sa('Gowtham'));