//lets see a simple functioning of loop here 

const days = ['mon','tue','wed','thursday','Friday','Saturday','Sunday']
console.log(days[0]);
//forEach value at array do index plus one since computer starts from 0 count and print the array value
days.forEach(function(day,index){console.log(`starts with ${index+1} -- ${day}`);})