//reverse array but don't create a new array and push elements into it


function reverseArrayInPlace(arr) {
  //divide by 2 because changing second half of array at same time changing first half
  for (var i = 0; i < arr.length / 2; i++) {
  	//switches value at index i with value i indexes from the end of the word
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  
  return arr;
}
 
reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7, 8]);//returns [8, 7, 6, 5, 4, 3, 2, 1]