function demoSpread() {
  // array literals
  var fruits = ["apples", "oranges"];
  var shoppingList = ["bananas", ...fruits];
  console.log(shoppingList); // ["bananas", "apples", "oranges"]

  // function arguments
  function trySpread(one, two) {
    console.log(one, two); // ["apples", "oranges"]
  }
  trySpread(...fruits);
}