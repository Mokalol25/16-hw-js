const users = [
    { name: "John", isActive: true, age: 32, occupation: "programmer" },
    { name: "Jane",isActive: true, age: 26, occupation: "teacher" },
    { name: "Mike", isActive: false, age: 42, occupation: "engineer" },
    { name: "Emily", isActive: true, age: 17, occupation: "designer" }
];
const isActiveUsers = users.filter((user) => !user.isActive)
console.log(isActiveUsers)
