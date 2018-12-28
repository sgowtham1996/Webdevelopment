//here lets see how can we save some of our memory by neglating a variable declaration and directly returning values in an function
let multiplyNum = function(Num1,Num2){
    return Num1 * Num2
}
console.log(multiplyNum(2,3));
 
//we can use default parameters for avoiding undefined values 
// he you can see three different values printer with different parameter function
// to see the undefined values , delete the default value at parameter and call the function without a value


let guestUser = function(name='NO Name', certificate=0){
    return 'Name of the user is: ' +name+ ' no.of.certificates he hold:' +certificate
}
console.log(guestUser());
console.log(guestUser('Gowtham'));
console.log(guestUser('Gowtham',10));
