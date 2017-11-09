// return an English translated sentence of a passed binary string separated by spaces

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode

function binaryAgent(str) {
	var newStr = '';
	arr = str.split(' ');
	for (var i = 0; i < arr.length; i++) {
		newStr += String.fromCharCode(parseInt(arr[i], 2));
	}
	return newStr;
}

binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111');

//https://forum.freecodecamp.com/t/freecodecamp-algorithm-challenge-guide-binary-agents/14273

function binaryAgent(str) {
  biString = str.split(' ');
  uniString = [];

/*using the radix (or base) parameter in parseInt, we can convert the binary
  number to a decimal number while simultaneously converting to a char*/

  for(i=0;i < biString.length;i++){
    uniString.push(String.fromCharCode(parseInt(biString[i], 2)));
  }
  
  // we then simply join the string
  return uniString.join('');
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

Separate the string into an array of strings separated by whitespace.
Create some variables that will be needed along the way, the names are self explanatory for the most part.
Iterate through each binary string in the new array.
Convert to decimal by using parseInt(binary, 2) (with the second parameter we tell in which base our numbers currently are)
At the end, we return out converted message.

https://forum.freecodecamp.com/t/javascript-string-prototype-split/15944
https://forum.freecodecamp.com/t/javascript-parseint/14686

function binaryAgent(str) {
  // Separate the binary code by space.
  str = str.split(' ');
  var power;
  var decValue = 0;
  var sentence = '';

  // Check each binary number from the array.
  for (var s = 0; s < str.length; s++) {
    // Check each bit from binary number
    for (var t = 0; t < str[s].length; t++) {
      // This only takes into consideration the active ones.
      if (str[s][t] == 1) {
        // This is quivalent to 2 ** position
        power = Math.pow(2, +str[s].length - t - 1);
        decValue += power;

        // Record the decimal value by adding the number to the previous one.
      }
    }

    // After the binary number is converted to decimal, convert it to string and store
    sentence += (String.fromCharCode(decValue));

    // Reset decimal value for next binary number.
    decValue = 0;
  }

  return sentence;
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

For each of these binary strings, check for the ones and ignore the zeroes.
For those that are one or active then convert them to decimal, this takes into account the position and the right power it needs to be raised to.
Store the power into the power variable by adding it to any previous ones on the variable decValue. This variable will add and add the powers of the active ones until the end of the loop and then return the decimal number.
Convert the final decimal outside of the inner loop and then convert it to ASCII and saving it to sentence along with any other text string already converted and stored.
Reset the variable decValue to avoid getting wrong decimals before continuing to the outer loop.

https://forum.freecodecamp.com/t/javascript-math-pow/14685

function binaryAgent(str) {
  return String.fromCharCode(...str.split(" ").map(function(char){ return parseInt(char, 2); }));
}

// test here
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


First we use split() to be able to work on each character as an Array element
Then use map() to process each element from binary to decimal using pareseInt()
Last we can use String.fromCharCode() to convert each ASCII number into the corresponding character
However fromCharCode() expects a series of numbers rather than an Array! We can use ES6 Spread Operator to pass in an Array of numbers as individual numbers. See here for more info; Spread Operator

https://forum.freecodecamp.com/t/javascript-array-prototype-map/14294