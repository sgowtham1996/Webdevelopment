// // alert('check whether c')
// function myValidation(){
//   let myValue = document.querySelector('myAnotherForm')
//   let myValue = document.getElementById('myAnotherForm').value;

//  if(isNaN(myValue) || myValue < 1 || myValue > 20) {
//    console.log("not a valid input");
//  }else{
//   console.log("this input is cool")
// }

// document.getElementById('#idone') = 'myvalue'
// }

document.querySelector('.Forminput').addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log(event.target.username.value);
  console.log(event.target.password.value);
  event.target.username.value = '' ;
  event.target.password.value = '' ;
})