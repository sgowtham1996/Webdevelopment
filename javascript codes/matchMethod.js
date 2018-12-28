// var num = '0123456789';
// var regexp = /[0-9]/gi;
// var matches_array = num.match(regexp);
// matches_array

var str = 'For more information, see Chapter 3.4.5.1';
var re = /see (chapter \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);