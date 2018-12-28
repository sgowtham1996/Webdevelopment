var john = {
  name: 'I am john',
  age:24,
  isActive:true,
}
var mary = {
  name: 'I am mary',
  age:28,
  isActive:true,
}
var sam = {
  name: 'I am sam',
  age:22,
  isActive:false,
}
let users = new Map()
console.log(typeof(users));

//map returs iterable values
users.set('john',john)
users.set('mary',mary)
users.set('sam',sam)
console.log(users)
console.log(users.size)
// you can use key to access elements of map datatype using get method
console.log(users.keys());
console.log(users.values());

const now = [['one','1'],['two','2'],['three','3']]
var newMap = new Map(now)
console.log(newMap)