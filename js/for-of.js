function demoForOf() {
  let arr = ["one", "two", "three"];

  for(let i in arr) {
    // logs 0, 1, 2
    console.log(i);
  }

  for(let i of arr) {
    // logs "one", "two", "three"
    console.log(i);
  }
}
