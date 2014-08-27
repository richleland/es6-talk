function demoMap() {
  var myMap = new Map();
  var someObj = {};

  myMap.set(50, "int");
  myMap.set("test", "string");
  myMap.set(someObj, "{}");

  console.log(myMap.get(50)); // "int"
  console.log(myMap.get("test")); // "string"
  console.log(myMap.get(someObj)); // "{}"
}