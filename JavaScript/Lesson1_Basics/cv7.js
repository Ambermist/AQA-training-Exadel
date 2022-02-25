/*
6 kyu
Convert string to camel case
https://www.codewars.com/kata/517abf86da9663f1d2000003
*/
function toCamelCase(str){
    const arr = str.split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === '-' || arr[i] === '_'){
      i++;
      arr[i] = arr[i].toUpperCase();
      }
      newArr.push(arr[i]);
    }
    let str1 = newArr.join('');
    return str1;
  }