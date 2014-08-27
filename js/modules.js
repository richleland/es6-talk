// lib/math.js
export function sum(x, y) {
  return x + y;
}

// app.js (using module)
module math from "lib/math";
console.log(math.sum(2, 3)); // 5

// app.js (using import)
import sum from "lib/math";
console.log(sum(2, 3)); // 5
