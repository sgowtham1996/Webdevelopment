const todo = [{
  title: 'learn java',
  isDone: false,
},{
  title: 'learn javaScript',
  isDone: true,
},{
  title: 'learn python',
  isDone: true,
},{
  title: 'learn react.js',
  isDone: false,
},{
  title: 'learn Node.js',
  isDone: true,
},{
  title: 'learn Django',
  isDone: false,
}]

const findNotDone = todo.filter((toodo)=> toodo.isDone === false)
const TitleNotDone = findNotDone.forEach((todoo) => console.log(todoo.title))

//console.log(findNotDone);
//console.log(TitleNotDone);
