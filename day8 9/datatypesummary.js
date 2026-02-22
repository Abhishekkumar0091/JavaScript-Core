// primtive

// 7 type : String, NUMBER,BOOLEAN,NULL,UNDEFINED,SYMBOL,BIGINT

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 34304944943404309409n

// Referacetype(non primtive)

// Array, object,Functions

const heros = ["shaktiman", "naagraj", "goga"];

let myObj = {
    name : "abhishek",
    age: 23,
}

const myFunction = function()
{
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof outsideTemp);

