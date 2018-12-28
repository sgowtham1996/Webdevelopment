//here we can see an  array of objects and how can we use it using find and findIndex method
//This is an array of objects
let myTodos = [{
  name:'Gowtham',
  present:'yes',
},{
  name:'Ranjith',
  present:'yes',
},{
  name:'preetha',
  present:'no',
}]

//console.log(myTodos)
//method 1
  const findName = function(checkName,available){
    const name = checkName.findIndex(function(todo,index){
      return todo.name.toLowerCase() === available.toLowerCase()
    })
    return checkName[name]
  }
let SearchName = findName(myTodos,'RanJith');
console.log(SearchName);

//method 2 
const findNam = function(checkName,available){
  const name = checkName.find(function(todo,index){
    return todo.name.toLowerCase() === available.toLowerCase()
  })
  return name
}
let SearchNam = findNam(myTodos,'RanJith');
console.log(SearchNam);
