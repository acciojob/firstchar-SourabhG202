function firstChar(text) {
  // your code here
	 for (let char of text) {
    // If the character is not a space, return it
    if (char !== ' ') {
      return char;
    }
  }
  // If no non-space character is found, return an empty string
  return '';
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
