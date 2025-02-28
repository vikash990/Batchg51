console.log("a");

setTimeout(() => {
  console.log("b");
}, 4000);

console.log("c");

setTimeout(() => {
  console.log("Conflict code");
}, 1000);

console.log("e4404");

setInterval(function () {
  console.log("i callled");
}, 2000);
console.log("Swapnil's code");
