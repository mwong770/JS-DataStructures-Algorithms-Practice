//replace each letter of string with the letter of the alphabet that is a certain number away
//num can be positive or negative

function caesarCipher(str,num) {
  //if pass in num < or > +-26, this will give an # between 1 and 26
  num = num % 26;
  var lowerCaseString = str.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var newString = '';
  
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];
    if (currentLetter === ' ') {
      newString += currentLetter;
      //move on to next iteration
      continue;
    }
    var currentIndex = alphabet.indexOf(currentLetter);
    var newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26;
    if (newIndex < 0) newIndex = 26 + newIndex;
    if (str[i] === str[i].toUpperCase()) {
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  };
  
  return newString;
}

caesarCipher('Big Car', -16);//returns 'Lsq Mkb'
caesarCipher('zoo keeper', 2);//returns 'bqq mggrgt'