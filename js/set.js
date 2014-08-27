function demoSet() {
  var arrayWithDupes = [1, 1, 2, 3, 3];
  var deDuped = new Set(arrayWithDupes);

  console.log(deDuped); // [1, 2, 3]
  console.log(deDuped.has(8)); // false
}