const users = [
    { name: "John", gender: "male", age: 32, occupation: "programmer"},
    { name: "Jane", gender: "female", age: 26, occupation: "teacher"},
    { name: "Mike", gender: "male", age: 42, occupation: "engineer"},
    { name: "Emily", gender: "female", age: 17, occupation: "designer"}
];
const usersAge = users.filter((user) => user.age >= 18 && user.age <= 60).map((user) => user.name)

console.log(usersAge)