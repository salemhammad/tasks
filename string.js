var text = "word Is This";

var lower = text.toLowerCase();
var upper = text.toUpperCase();
console.log(lower);
console.log(upper);

let split = text.split(" ");
console.log(split);

///////////////////////

const str = "WORD IS THIS";
const toLowerCase = function () {
  let str = "";
  for (let i = 0; i < this.length; i++) {
    const char = this[i].charCodeAt();
    if (char >= 65 && char <= 90) {
      str += String.fromCharCode(char + 32);
    } else {
      str += this[i];
    }
  }
  return str;
};
String.prototype.toLowerCase = toLowerCase;
console.log(str.toLowerCase());
