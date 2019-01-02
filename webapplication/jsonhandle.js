const Student = {
  name:  'Gowtham',
  age:23,
  isActive: true
}

//convert this object into a string to be stored in local storage

const Studentobjtostring = JSON.stringify(Student)
console.log(typeof Studentobjtostring);

// localStorage.setItem('student',Studentobjtostring);


const reverse = JSON.parse(Studentobjtostring);
console.log(typeof(reverse))
console.log(reverse.age)
// localStorage.setItem()