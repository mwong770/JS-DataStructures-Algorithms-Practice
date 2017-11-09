//returns true if we have enough words in our magazine to create our note out of magazine words


function harmlessRansomNote(noteText, magazineText) {
	var noteArray = noteText.split(' ');
	var magazineArray = magazineText.split(' ');
	// figures out what words are available in our magazine and 
	//how many of each word we have
	var magazineObj = {};
	// puts every word in magazineArray as a property in magazineObj and counts # of each word
	magazineArray.forEach(word => {
		//if not present in object, make it a property in object
		if (!magazineObj[word]) magazineObj[word] = 0;
		//increment count of word by one
		magazineObj[word]++;
	});

	var noteIsPossible = true;

	noteArray.forEach(word => {
		//if the word is in magazineObj, decrement it by one
		if(magazineObj[word]) {
			magazineObj[word]--;
			if (magazineObj[word] < 0) noteIsPossibe = false;
		}
		//if word not in magazineObj, sets nnoteIsPossible to false
		else noteIsPossible = false;
	});

	return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
