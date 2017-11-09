
//THIS METHOD MORE EFFECTIVE THAN THE ONE AFTER, BUT ALL BUBBLESORTS INEFFECTIVE
var numbers = [55, 23, 45, 100, 62, 30, 23];

//can do array.length - 1 because when get to second to array item, j+1 accounts for last array item 
function bubblesort() {
	var flipped = false;
	//don't want var instantiation in a loop
	var holder;
	for (var i = 0; i < numbers.length-1; i++) {
		if (numbers[i] > numbers[i+1]) {
			flipped = true;
			holder = numbers[i];
			numbers[i] = numbers[i+1];
			numbers[i+1] = holder;
		}
	}
	if (flipped) {
		bubblesort();
	}
	
}

console.log("Here are your sorted numbers.");
console.log(numbers.toString());

bubblesort();

////////////////////////////////////////////////////////////////////////////////////
var array = [55, 23, 45, 100, 62, 30, 23];

//METHOD 2 - WASTEFUL - FIRST LOOP GOES THRU THE MAX NUM OF TIMES EVEN IF NOT NEEDED

var temp1;
for (var i = 0; i < array.length; i++) {
	for (var j = 0; j < array.length-1; j++) {
		if (array[j] > array[j+1]) {
			temp1 = array[j];
			array[j] = array[j+1];
			array[j+1] = temp1;
		}
	}
}

console.log("Here are your sorted numbers.");
console.log(array.toString());

//----DEMONSTRATION OF WHY ABOVE METHOD LESS EFFECTIVE THAN FIRST METHOD----
// in first loop-------i=1--------
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in first loop-------i=2--------
// in second loop
// in second loop
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in first loop-------i=3--------
// in second loop
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in first loop-------i=4--------
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in second loop
// in first loop-------i=5--------
// in second loop
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in first loop-------i=6--------
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in first loop-------i=7--------
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// [ 23, 23, 30, 45, 55, 62, 100 ]

//BASED ON THE ABOVE RESULT, WE SEE THAT AT i=6 and i=7, IT NEVER ENTERED THE IF STMT, MEANING THE CODE NEEDLESSLY WENT THRU THE LOOP. SINCE THE LAST TIME IT SATISFIED THE IF STMT WAS AT i=5, HAVING THE LOOP END AT i=5 SHOULD GIVE THE SAME RESULT, AS DEMONSTRATED BELOW.

var array2 = [55, 23, 45, 100, 62, 30, 23];
var temp2;
for (var i = 0; i < 5; i++) {
	for (var j = 0; j < array2.length-1; j++) {
		if (array2[j] > array2[j+1]) {
			temp2 = array2[j];
			array2[j] = array2[j+1];
			array2[j+1] = temp2;
		}
	}
}

console.log("Here are your sorted numbers.");
console.log(array2.toString());

// in first loop-------i=1--------
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in first loop-------i=2--------
// in second loop
// in second loop
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in first loop-------i=3--------
// in second loop
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in first loop-------i=4--------
// in second loop
// in second loop
// in if stmt
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in second loop
// in first loop-------i=5--------
// in second loop
// in second loop
// in if stmt
// in second loop
// in second loop
// in second loop
// in second loop
// in second loop
// [ 23, 23, 30, 45, 55, 62, 100 ]
