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

/// lastname
const groupBylastname = User.reduce(
  (group, arr) => {
    const { lastname } = arr;

    group[lastname] = group[lastname] ?? [];

    group[lastname].push(arr);

    return group;
  },

  {}
);
console.log(groupBylastname);

function groupBy(array, keys) {
  return array.reduce((result, currentValue) => {
    const groupKey = keys
      .split("+")
      .map((key) => currentValue[key.trim()])
      .join("");
    (result[groupKey] = result[groupKey] || []).push(currentValue);
    return result;
  }, {});
}

const groupedByCityAndLastName = groupBy(User, "address.city.id + lastName");
console.log(groupedByCityAndLastName);

function condtionalMap(arr, condition, transform) {
  return arr.filter(condition).map(transform);
}

///

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
