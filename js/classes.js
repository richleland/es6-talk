function demoClasses() {
  class Vehicle {
    constructor(name) {
      this.name = name;
      this.hasWings = false;
    }

    canFly() {
      return this.hasWings;
    }
  }

  class Car extends Vehicle {
    constructor(name, make, model) {
      super(name);
      this.hasWings = false;
      this.make = make;
      this.model = model;
    }
  }

  class Plane extends Vehicle {
    constructor(name) {
      super(name);
      this.hasWings = true;
    }
  }

  var myCar = new Car("A-Team Van", "GMC", "Vandura");
  console.log(myCar.canFly()); // false
  console.log(myCar.make); // "GMC"

  var myPlane = new Plane("The Wright Flyer");
  console.log(myPlane.canFly()); // true
}