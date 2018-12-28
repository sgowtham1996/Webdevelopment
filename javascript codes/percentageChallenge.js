let getMyGrade = function(currentMarke = 0, totalMarks =0){
    let myPercent = (currentMarke/totalMarks) * 100

    let myGrade = ''

    if(myPercent >= 90){
        myGrade = 'A'
    }else if(myPercent >= 80){
        myGrade = 'B'
    }else if(myPercent >= 70){
        myGrade = 'C'
    }else if(myPercent >= 60){
        myGrade = 'D'
    }else if(myPercent >= 50){
        myGrade = 'E'
    }else {
        myGrade = 'F'
    }

    return `Your percentage is : ${myPercent} your Grade is : ${myGrade}`
} 
console.log(getMyGrade(70,100));
//or
let result = getMyGrade(60,100);
console.log(result);