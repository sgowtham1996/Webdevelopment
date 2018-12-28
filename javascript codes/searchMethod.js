var str = '0123456789@';
var re = /[A-Z]/g;
var re2 = /[Manditory@189]/g;
let password = /[Manditory189]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
console.log(str.search(password));