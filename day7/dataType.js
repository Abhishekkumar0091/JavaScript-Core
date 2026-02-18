// primtive 

// 7 type : String, Number, Boolean, null, undefined, symbol, BigInt

const score  = 100;
const scoreValue = 100.3;


const isLoggedIn = false;
const outsideTemp = null;

let userEmail; //undefined

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 344354545465464646456n;
console.log(typeof bigNumber);



//Reference (Non primrive)

//Array, Object, Functions

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

