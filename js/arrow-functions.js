function demoArrowFunction1() {
  // no more of this nonsense
  // var self = this;

  function Item() {
    this.y = 2;

    setTimeout(function() {
      console.log(this.y); // undefined
    }, 500);

    setTimeout(() => {
      console.log(this.y); // 2
    }, 1000);
  }

  var item = new Item();
}

function demoArrowFunction2() {
  var squared = x => x * x;
  console.log(squared(7)); // 49
}