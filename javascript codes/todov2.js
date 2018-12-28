const todos =[{
    title:'watch js',
    isdone: true
},
{
    title:'watch bs',
    isdone:true
},
{
    title:'practice code',
    isdone:true
},
{
    title:'read documentation',
    isdone:false
},
{
    title:'fun',
    isdone:false
},
{
    title:'etc.',
    isdone:false
},]

const thingsnotdone = todos.forEach((todo) => { 
   if( todo.isdone === false){
       console.log(todo.title)
   }
   
}

)