const people = [
    { name: "John", age: 32, occupation: "programmer"},
    { name: "Jane", age: 26, occupation: "teacher"},
    { name: "Mike", age: 42, occupation: "engineer"},
    { name: "Emily", age: 17, occupation: "designer"}
];
const names = people.map((person) => person.name)
console.log(names)