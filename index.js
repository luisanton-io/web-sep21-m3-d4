// VAR

// var has FUNCTION SCOPE
// not "global" as very commonly thought

function myFunction() {
    var x = 0

    if (true) {
        var x = 1
        console.log(x)
    }

    console.log(x) // still 1
}

// myFunction()

// LET and CONST

// let and const have block scope
// a block is delimited by curly braces

// const is like let BUT can't be reassigned

function myFunction() {

    const x = 0

    if (true) {
        const x = 1
        console.log(x)
    }

    console.log(x) // is 0 because in outer scope
}

// myFunction()


// DEFAULT PARAMETERS

// You can assign a default init value to
// your function parameters using an assigment

function multiply(n1, n2 = 1) {
    return n1 * n2
}

// console.log(multiply(3))

// REST PARAMS

function sumAll(...numbers) {
    return numbers.reduce((a, c) => a + c)
}

// console.log('sumAll: ' + sumAll(3, 5, "just ", "a ", "string"))


// ARROW FUNCTIONS AND A LITTLE ABOUT THIS
console.log(this)

// global execution context color
this.color = "another color"

const myCar = {
    color: "black",
    year: 1989,
    displayColor: function () {
        console.log(this.color) // this is my car
    },
    __displayColor: () => {
        console.log(this.color) // this is the global this
    }
}

myCar.displayColor() // displays the car color
myCar.__displayColor() // displays the global execution context color

// DESTRUCTURING

const car = {
    brand: "BMW",
    year: 2018,
    plate: "FF111HH"
}

// const brand = car.brand
const { brand, year, plate } = car

console.log(brand, year)

// bad old boring way
// function displayContact(objContact) {
//     console.log(objContact.name, objContact.email)
// }

// nice new fresh cool way
function displayContact({ name, email }) {
    console.log(name, email)
    // go in the dom and display this stuff...
}

const Diego = {
    name: "Diego Banovaz",
    email: "diego@strive.school",
    address: "a90sd8fuasd9f8",
    age: 99,
    whatever: "idk",
    level: "standard"
}

displayContact(Diego)

// Renaming destructured elements of an obj

// const fullName = Diego.name
const { name: fullName } = Diego

console.log(fullName)

// Destructured assignment

let { name, email, level } = Diego

const Stefano = {
    name: "Stefano Miceli",
    email: "mic@strive.school",
    address: "uityf7i8rt678",
    age: 99,
    whatever: "yo",
    level: "pro-user"
};

({ name, email, level } = Stefano)

// console.log(name, email)

// Destructuring Arrays

const numbers = [10, 20]

const [n1, n2, n3] = numbers
console.log({ n3 })

let a = 10
let b = 20;

// Swap variables
// let c = a // 10 // aux var? no need for that anymore

// a = b // 20
// b = c // 10

// We can swap two vars value like this now:
[a, b] = [b, a]

// console.log({ a, b })


// SPREAD OPERATOR

const anotherCar = {
    ...car,
    year: 2020,
    color: 'white',
}

car.brand = "Mercedes"

console.log(anotherCar)

const newArray = [1, 2, ...numbers, 12, 534, 45]

// console.log(newArray)

// OTHER ARRAY METHODS

// some

// is letting us know if there is at least one element
// in the array which is making the predicate return true

// Some is expecting a predicate function like filter
// but it's returning only a boolean value

console.log(
    "Is at least one element in the array passing the predicate: ",
    [1, 2, 5, 10, 50, 200].some(n => n > 50)
)

// every

// Expects a predicate function
// Retuns true if the predicate is returning true 
// for every element of the array

console.log("Is every element passing the predicate?: ",
    [1, 2, 5, 10, 50, 200].every(n => n < 50)
);

const arrayN = [1, 2, 5, 10, 50, 200]


// .forEach
const result = arrayN
    // .filter(n => 50 <= n && n < 200)
    .forEach(element => {
        // do something
        console.log(element)

    });

console.log(result)

// FOR LOOPS

// for (let i = 0; i < arrayN.length; i++) {
//     console.log(arrayN[i])
// }

// for (const number of arrayN) {
//     console.log(number)
// }

// arrayN.forEach(number => console.log(number))

console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object.entries(car))

Object.entries(car)
    .forEach(([key, value]) => {
        console.log(key, value)
    })

