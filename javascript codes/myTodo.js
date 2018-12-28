//simple todo function 

const names = []

names.push('Gowtham')
names.push('ranjith')
names.push('sheriff')

names.forEach(function(todo,index){
        console.log(`list content ${index + 1} : ${todo}`);
})
 console.log('using an for loop ');
// using for loop to count from last entry 

for (let index = names.length-1 ; index >= 0; index--) {
    console.log(`list content ${index} : ${names[index]}`);
}