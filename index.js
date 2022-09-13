// function greetTheStudent(studentname) {
//     return `Hello there ${student}`
// }

const greetTheStudent = studentName => `Hello there ${studentName}`; 

// const fullName = function(firstName, middleName, lastName) {
//     return `${lastName}, ${middleName}. ${firstName}`
// }

// const fullName = (firstName, middleName, lastName) => {
//     return `${lastName}, ${middleName}. ${firstName}`
// }

const fullName = (firstName, middleName, lastName) => `${lastName}, ${middleName}. ${firstName}`

// const student = "Mary Jane"

// const greet = greetTheStudent(student);
// console.log(greet)

const titleName = fullName("Marry", "R", "Jane")
console.log(titleName)