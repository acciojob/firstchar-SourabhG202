function firstChar(text) {
  if (!text) return ""; // Handle empty or undefined input
  for (let i = 0; i < text.length; i++) {
    if (text[i] !== ' ') {
      return text[i];
    }
  }
  return "";
}

// Do not change the code below
const text = prompt("Enter text:"); // Ensure text is properly defined
alert(firstChar(text));
