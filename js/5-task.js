const users = [
    { name: "John", email: "john@email.com" },
    { name: "Jane", email: "jane@email.com" },
    { name: "Mike", email: "mike@email.com" },
];
const usersEmail = users.filter((user) => user.email === "john@email.com")
console.log(usersEmail)
