//code challenge to calculate the grade 
console.log("give your subject mark in 100 and total for 600")
let marks = function (mark=0,total=0,percentage=0) {
    console.log('Your percentage is :' +((total/500)*100)+'%'); 
    return 'your mark is : '+mark+ ' your total is : ' +total
}
console.log(marks(95,200));
if(marks.percentage >= 90){
    console.log("congrats you got grade A");
}else if(marks.percentage >= 80){
    console.log("congrats you got grade B");
}else if(marks.percentage >= 70){
    console.log("congrats you got grade C");
}else if(marks.percentage >= 60){
    console.log("congrats you got grade D");
}else if(marks.percentage >= 50){
    console.log("congrats you got grade E");
}else{
    console.log("sorry! you have got Grade f retake assignment")
}