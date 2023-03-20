const obj = {
  Salem: 1,
  Ahmad: 2,
  Hammad: 3,
};
const Entries = Object.entries(obj);
console.log(Entries);

const User = [
  {
    firstname: "Salem",
    lastnmae: "Hammad",
    address: {
      city: {
        id: "0",
        name: "Bethlehem",
      },
    },
  },
  {
    firstname: "Saed",
    lastnmae: "Hammad",
    address: {
      city: {
        id: "1",
        name: "Bethlehem",
      },
    },
  },
  {
    firstname: "Rami",
    lastnmae: "Ahmad",
    address: {
      city: {
        id: "2",
        name: "Rammalh",
      },
    },
  },
  {
    firstname: "Moath",
    lastnmae: "Omar",
    address: {
      city: {
        id: "3",
        name: "Nables",
      },
    },
  },
];

function getDeep(obj, pathString, defaultValue) {
  const pathArr = pathString.split(".");
  let current = obj;
  for (let i = 0; i < pathArr.length; i++) {
    if (!current || !current.hasOwnProperty(pathArr[i])) {
      return defaultValue;
    }
    current = current[pathArr[i]];
  }
  return current;
}

const city1Name = getDeep(User, "1.address.city.name", "No City Assigned");
console.log(city1Name);

const city3Name = getDeep(User, "3.address.city.name", "No City Assigned");
console.log(city3Name);

const city5Name = getDeep(User, "5.address.city.name", "No City Assigned");
console.log(city5Name);
