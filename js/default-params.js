function demoDefaultParams() {
  function personalInfo(age, firstName = "John") {
    // ooh string templates too!
    return `${firstName} ${lastName} is ${age}`;
  }

  console.log(personalInfo(34, "Rich")); // Rich is 34
  console.log(personalInfo(100)); // John is 100
}