function demoComprehensions() {
  var letters = ["A", "B", "C"];
  var numbers = [1, 2, 3];

  // similar to letters.map
  var lowerCased = [for (letter of letters) letter.toLowerCase()];
  console.log(lowerCased); // ["a", "b", "c"]

  // similar to letters.filter
  var filtered = [for (letter of letters) if (letter !== "A") letter];
  console.log(filtered); // ["B", "C"]

  // multiple arrays
  var combined = [for (letter of letters) for (number of numbers) letter + number];
  console.log(combined); // ["A1", "A2", "A3", "B1", ...]
}