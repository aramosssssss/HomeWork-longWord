let longWord = prompt('Write your word');
longWordarray = [...`${longWord}`];

if (longWord.length > 10) {
  middleWord = longWordarray.slice(1, -1);
  firstItem = longWordarray[0];
  lastItem = longWordarray[longWordarray.length - 1];
  middleWordNumb = middleWord.length;

  console.log(firstItem + middleWordNumb + lastItem);
} else {
  console.log(longWordarray.join(''));
}
