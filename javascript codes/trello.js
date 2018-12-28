const days = ['monday','tuesday','wednesday','thursday','Friday','Saturday','Sunday']

//for loop 
//instead of index++ we can use index = index + 1 .
//also we can use index <= days.length -1 instead of index < days.length
console.log("basic method");
for (let index = 0; index < days.length; index++) {
    const element = days[index];
    console.log(element);
}

console.log("alternate method");
for (let index = 0; index < days.length; index++) {
    //the above two lines can be minimized using following command
    console.log(days[index]);
    
}


//to run an array from its last we can use decrement
console.log("reverse count :")
for (let index = days.length-1; index >= 0; index--) {
    console.log(days[index]);
}
    
