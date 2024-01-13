const users = [
    { name: "John", gender: "male", age: 32, occupation: "programmer"},
    { name: "Jane", gender: "female", age: 26, occupation: "teacher"},
    { name: "Mike", gender: "male", age: 42, occupation: "engineer"},
    { name: "Emily", gender: "female", age: 17, occupation: "designer"}
];

const filteredNames = users.filter((user) => user.gender === 'female')
.map((user) => user.name);

console.log(filteredNames);