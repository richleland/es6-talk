function demoLet() {
  {
    var a = 2;
    let b = 2;
  }

  console.log(a); // 2
  console.log(b); // ReferenceError: b is not defined
}