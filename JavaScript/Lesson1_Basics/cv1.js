/*
6 kyu
Count characters in your string
https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript
*/
function count (string) {  
    var count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }