//Return the lowest index at which a value (second argument) should be inserted into an array 
//(first argument) once it has been sorted. The returned value should be a number.
//For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
//but less than 2 (index 1).
//Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it 
//will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

//HELPFUL LINKS:
//---https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort?v=control

function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a,b) {
    return a - b;
  });
  var ans = arr.indexOf(num);
  return ans;
}

getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2
getIndexToIns([40, 60], 50); // should return 1
getIndexToIns([3, 10, 5], 3); // should return 0
getIndexToIns([5, 3, 20, 3], 5); // should return 2
getIndexToIns([2, 20, 10], 19); // should return 2
getIndexToIns([2, 5, 10], 15); // should return 3

//--------------------- another way ----------------------------

function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) return i;
  }
  return arr.length; 
}

getIndexToIns([40, 60], 50);