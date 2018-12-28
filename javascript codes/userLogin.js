// It is a program to define Login user accessibility for a website 
// I consider four factors for user login 
// isVerified , isLoggedIn , hasPaymentToken , isGuest
// operator && , || ,! this s is an condition which reverse the condition if true it changes to false and vice versa
 
let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (isVerified && isLoggedIn && hasPaymentToken){
    console.log("Greeting welcome! to our website")
    console.log("Access fully")
}else if(isLoggedIn || isGuest){
    cosole.log("Please log in the wesite to get access")
}else{
    console.log("you have not paid and done subscribed yet,please subscribe and pay for the fully access")
}
