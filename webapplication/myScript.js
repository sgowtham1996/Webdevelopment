// document.querySelector('button').addEventListener('click',(event) =>{
// event.target.textContent = 'i was clicked'
// })

// document.querySelector('#myAnotherForm').addEventListener('change',(event) =>{
//   console.log(event.target.value);
// })

document.querySelector('#myAnotherForm').addEventListener('input',(event) =>{
  console.log(event.target.value);
})