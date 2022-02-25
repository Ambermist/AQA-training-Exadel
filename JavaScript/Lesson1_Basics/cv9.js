/*
7 kyu
Shortest Word
https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
*/
function findShort(s){
    var words = s.split(' ');
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest.length;
  }