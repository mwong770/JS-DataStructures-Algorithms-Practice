//print 1 to the value of num
//if a num is divisible by 3 print fizz
//if a num is divisible by 5 print buzz
//if a num is divisble by 3 and 5 print fizz buzz

function fizzBuzz(num) {
	for (var i = 1; i <= num; i++) {
		if (i % 15) console.log("fizz buzz");
		else if (i % 3 === 0) console.log("fizz");
		else if (i % 5 === 0) console.log("buzz");
		else console.log(i);
	}
}

fizzBuzz(20);