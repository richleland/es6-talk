function demoGenerators() {
  function* fibonacci() {
    var fn1 = 1;
    var fn2 = 1;

    while(1) {
      var current = fn2;
      fn2 = fn1;
      fn1 = fn1 + current;
      yield current;
    }
  }

  var sequence = fibonacci();
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 1
  console.log(sequence.next().value); // 2
  console.log(sequence.next().value); // 3
}