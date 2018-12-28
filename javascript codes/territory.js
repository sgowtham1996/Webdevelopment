//use let declaration of variable always if we declare or assign something without any type of declarataion like let,var or const it will be considered as global variable in javascript 

let king = "john"
 
if(true){
    //let king = 'sam'
    if(true){
        // check these variable by commenting for understanding of functionality
        //let king = 'ram'
        //king = 'ram' bad way of declaring an variable it makes global so we are not aware of this problem
        console.log("my first part :" +king)
    }
}
if (true)
{
    console.log("my second part:" +king)
}