// const original = {
//     name: "Alice",
//     details: {
//       age: 25,
//       city: "Wonderland"
//     }
// };

// const user = original;

// user.name = "John";


const original = {
    name: "Alice",
    details: {
      age: 25,
      city: "Wonderland"
    }
};

const user = {...original};

user.name = "John";

console.log(original);
