//here let us see about a function or a method call .shift by using an array 

let ArrayBe = ['one','two','three','four','five','six']

//at start of an array
console.log(ArrayBe);
console.log(ArrayBe.shift());
console.log(ArrayBe);
//By using this we can do operations at index[0] and do an continous operations
// for adding contents at beginning of the index we can use unshift method 
let ArayBe = ['one','two','three','four','five','six']
ArayBe.unshift('something');
console.log(ArayBe);

//At middle of an array
// for doing changes at middle of an array we can use this below method let ArrayBe = ['one','two','three','four','five','six']
let arrayBe = ['one','two','three','four','five','six']
arrayBe[2] = 'Something'
console.log(arrayBe);

//for operations at end of an array we use operations like pop and push 
let lastSet = ['one','two','three','four','five','six']
console.log(lastSet.pop());
console.log(lastSet);
 
// for writting values at the end of the array we use push method 
let lastWrite = ['one','two','three','four','five','six']
console.log(lastWrite.push('Seven'));
console.log(lastWrite);

//for deleting contents at middle and adding any new things we can use splice method
//here splice (index of the value to be deleted , no.of.items to be deleted ,string which have to be added at deleted place)
let middleSet  = ['one','two','three','four','five','six']
console.log(middleSet.splice(2,1,'deleted '))
console.log(middleSet);


