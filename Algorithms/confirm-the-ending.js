//Check if a string (first argument, str) ends with the given target string (second argument, target).
//Don't use the .endsWith() method. 

//HELPFUL LINKS:
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
//--- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

//The second argument to substring is the index to stop at (but not include)
//The second argument to substr is the maximum length to return. 

//*********** USING SUBSTRING() *************
//substring(index start (first char to include; here, 6 - aka "n"), index end but don't include (first char not to include; here 7 (aka right after though no char exists there)));
//here, substring (7-1, 7);
//here, start at 6  (which is n) and end at 7 (right after) but don't include 7

function confirmEnding(str, target) {
    var targetLength = target.length;
	var ending = str.substring(str.length-targetLength, str.length);
    return ending === target;
}

confirmEnding("Bastian", "n");

//*********** USING SUBSTR() *************

function confirmEnding(str, target) {
	var length = target.length;
	return str.substr(-length) === target ? true : false;
}

confirmEnding("Bastian", "n");