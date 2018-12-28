//there are many ways of declaring function simple way is 
//simple way to declare a function 
let sayHello = function(){
    console.log("Greeting! for my channel");
    console.log("Hey! user");
}
// the above comment is similar to assign a value to a variable name 
//for eg
//let name = 'Gowtham'
// for action or to see the output of name we use a function called console.log
//console.log(name);
//similarly
//we need to call the function by using the similar log calling method

sayHello() 
 
//lets do functions with parameter i use name as a parameter here , anything comes within bracket of function is a parameter ,we can have many parameter as we like for eg function(param1,param2,param3) etc..

let sayName = function(name){
    console.log(`hi your name is : ${name} `);
    console.log(`great to see you ! ${name}`);
}
// we need define the value we send to our parameter for eg here 'Gowtham' by using single quotes we say its an char ,similarly we can use "" to say it as a string

sayName("Gowtham")

let fullname = function(name,initial){
    console.log("hey! what is your name and initial");
    console.log(`hey! ${name} ${initial}`);
}
fullname('Gowtham','S')

//for parameters with number value
let adder = function(value1,value2){
    let addValue = value1 + value2
    return addValue
}
//calling the adder(3,5) function will only do the math but it wont be printed in log ,you must use console.log command inorder to see the output 
adder(3,5)
console.log("")
console.log(adder(3,6));
// you can also use another variable to store the  value and use console.log command to view the output 
let result = adder(3,7)    
console.log(result)

