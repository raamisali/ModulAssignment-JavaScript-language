var age = 10
var salary = 15.00

// console.log(`The variable type of an age is ${typeof age}`)
// console.log(`The variable type of an salary is ${typeof salary}`)

var name = "John Smith"

console.log(`The variable type of an name is ${typeof name}`)

const displayGreetings = function(name, year) {
    console.log(`Happy new year ${year} ${name}`)
}


const displayGreetingsWithEmoji = function(name, year) {
    console.log(`😄 Happy new year ${year} ${name} 😄`)
}




const greet = function(name, year, func) {
    func(name, year)
}

greet("Sam", 2022, displayGreetingsWithEmoji)
greet("Jane", 2022, displayGreetings)