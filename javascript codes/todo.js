const todos = [{
  name:'Gowtham',
  present:true,
},{
  name:'magdum',
  present:true,
},{
  name:'Sajid',
  present:false,
}]

// filter methods will look for the object then returns the values when the condition is meets
const findName = todos.filter((todo) => todo.present === true )

console.log(findName)