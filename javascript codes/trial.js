let numCheck = /[0123456789]/g;

let username = "sgowtham9@gmail.com";
let password = 'manditory189'

let usernameCorrect = username.search(numCheck);
let passwordCorrect = password.search(numCheck);

let userCheck = function(UserString,number){
  if ((username.length > 6) && (number >= 0) && (username.includes('.com') && (username.includes('@')))){
    return `Your Username : ${username} successfully accessed`
  }
  return 'Sorry! your username have not met prefered criteria'
}

let passCheck = function(UserString,number){
  if ((password.length > 6) && (number >= 0)){
    return `Your Username : ${password} successfully accessed`
  }
  return 'Sorry! your password have not met prefered criteria'
}

console.log(userCheck(username,usernameCorrect))
console.log(passCheck(password,passwordCorrect))
