///////////////////////
/*
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
*/
///////////////////
function setValueToAcopy(obj, path, value) {
  const copy = { ...obj };
  const keys = path.split(".");
  let current = copy;

  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) {
      current[keys[i]] = {};
    }
    current = current[keys[i]];
  }

  current[keys[keys.length - 1]] = value;
  return copy;
}

let user = { id: 1 };
let updatedUser = setValueToAcopy(user, "name", "tomatoo");
console.log(updatedUser);
console.log(user);
