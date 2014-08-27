function demoDestructure() {
  // object destructuring
  let someObj = {
    x: 20,
    y: 30
  };

  let {x, y} = someObj;

  console.log(x); // 20
  console.log(y); // 30


  // array desctructuring
  function f() {
    return [1, 2, 3];
  }

  let [first,,third] = f(); // ignore the second element

  console.log(first); // 1
  console.log(third); // 3
}