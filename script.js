console.log("a");

setTimeout(() => {
  console.log("b");
}, 4000);

console.log("c");

setTimeout(() => {
  console.log("b");
}, 1000);

console.log("e");

setInterval(function () {
  console.log("i callled");
}, 2000);
console.log("Swapnil's code");
