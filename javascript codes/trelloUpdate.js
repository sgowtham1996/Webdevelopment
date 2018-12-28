//In this  program we choose object and its calling methods and functions for doing our trello application
//object declaration

let myTodos = {
    day:'Monday',
    meetings:0,
    meetDone : 0,
    
} 

let addMeeting = function(todo,meet =0) {
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo,meet=0){
    todo.meetDone = todo.meetDone - meet
}

let resetDay = function(todo){
    todo.meetings = 0;
    todo.meetDone = 0;
}
// i use plus meet below because while calculating it takes negative si
let getSummary = function(todo){
    let meetLeft = todo.meetings + todo.meetDone 
    return `You still have ${meetLeft} meetings today!`
} 

addMeeting(myTodos,5)
addMeeting(myTodos,7)
meetDone(myTodos,6)
console.log(myTodos) 
console.log(getSummary(myTodos))