const people = [
    { name: "John", age: 32, occupation: "programmer", eyeColor: "green"},
    { name: "Jane", age: 26, occupation: "teacher", eyeColor: "green"},
    { name: "Mike", age: 42, occupation: "engineer", eyeColor: "brown"},
    { name: "Emily", age: 17, occupation: "designer", eyeColor: "green"},
];
const peopleEyeColor = people.filter((personEyeColor) => personEyeColor.eyeColor == 'green')
console.log(peopleEyeColor)
