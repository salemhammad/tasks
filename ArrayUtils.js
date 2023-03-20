const User = [
  {
    firstName: "Salem",
    lastName: "Hammad",
    address: {
      city: {
        id: "1",
        name: "Bethlehem",
      },
    },
  },
  {
    firstName: "Saed",
    lastName: "Hammad",
    address: {
      city: {
        id: "2",
        name: "Bethlehem",
      },
    },
  },
  {
    firstName: "Rami",
    lastName: "Ahmad",
    address: {
      city: {
        id: "3",
        name: "Rammalh",
      },
    },
  },
  {
    firstName: "Moath",
    lastName: "Omar",
    address: {
      city: {
        id: "4",
        name: "Nables",
      },
    },
  },
];

function condtionalMap(arr, condition, transform) {
  return arr.filter(condition).map(transform);
}
function condtionalMap(arr, condition, transform) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArr.push(transform(arr[i]));
    }
  }
  return filteredArr;
}

const result = condtionalMap(
  [1, 2, 3, 4, 5, 6],
  function (c) {
    return c % 2 === 0;
  },
  function (c) {
    return c * 5;
  }
);
console.log(result);
//////

function groupByLastName(arr, key) {
  return arr.reduce(function (arr, x) {
    (arr[x[key]] = arr[x[key]] || []).push(x);
    return arr;
  }, {});
}

const lastname = groupByLastName(User, "lastName");
console.log(lastname);
////////////////

function groupByLastNameAndCityName(arr, callback) {
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    const groupName = callback(arr[i]);

    if (!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(arr[i]);
  }

  return result;
}
const groupedByCityAndLastName = groupByLastNameAndCityName(
  User,
  (item) => item.lastName + item.address.city.name
);

console.log(groupedByCityAndLastName);
