/*
6 kyu
Multiples of 3 or 5
https://www.codewars.com/kata/514b92a657cdc65150000006
*/
function solution(number){
    if(number < 0) {
      return 0;
    }
    let sum = 0;
    while(number > 3){
      number--;
      if(number%5 === 0 || number%3 === 0){
        sum+=number;
      }
    }
    return sum;
  }