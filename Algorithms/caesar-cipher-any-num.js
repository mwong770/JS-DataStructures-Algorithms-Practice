//replace each letter of string with the letter of the alphabet that is a certain number away
//num can be positive or negative

function cesar(orgString, num) {
  //if pass in num < or > +-26, this will give an # between 1 and 26
  num = num % 26;
  //if a negative number, will return a positive number
  if (Math.sign(num) === -1 || Math.sign(num) === -0) {
    num = -num;
  }
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  lowerOrgString = orgString.toLowerCase();
  var newString="";
  for (var i=0; i< lowerOrgString.length; i++) {
      if (lowerOrgString[i].match(/[a-z]/)) {
            newIndex = alphabet.indexOf(lowerOrgString[i]) + num;
            if (newIndex >= 26) {
              newIndex -=26
            }
            newLetter = alphabet[newIndex];
      } else {
            newLetter = lowerOrgString[i];
      }
     if (orgString[i] === orgString[i].toUpperCase()) {
        newString += newLetter.toUpperCase();
      } else  {
       newString += newLetter;
      }
  } //ends for loop
  return newString;
} //ends function

cesar("Hello this is a string.", 13); ////"Uryyb guvf vf n fgevat."

caesarCipher('zoo keeper', 2); //returns 'bqq mggrgt'