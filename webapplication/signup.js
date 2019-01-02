
function validate(){
  let pass1 = document.getElementById('password1').value;
  let pass2 = document.getElementById('password2').value;
 if(pass1.length === pass2.length && pass1.includes(pass2)){
     console.log("SIGNED UP!!!")
    }else{
      console.log("not a valid input");
 }
}
document.querySelector('.signinput').addEventListener('submit',(event)=>{
  event.preventDefault();
  console.log(event.target.startname.value);
  console.log(event.target.initial.value);
  console.log(event.target.emailaddress.value);
  console.log(event.target.password.value);
  console.log(event.target.repassword.value);
  
  event.target.startname.value = '' ;
  event.target.initial.value = '' ;
  event.target.emailaddress.value = '';
  event.target.password.value = '' ;
  event.target.repassword.value = '';
})


