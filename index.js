// developed 1995 at Netscape for user interactions in the browser - 
// in 10 days has nothing to do with Java, just
// a marketing gag

// our main resource is always the basis documentation - for javascript it is MDN 


/*
    this is a multiline comment
*/

// this is a single line comment


// shortcuts for mac : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf

// shortcuts for windows : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf  

// what is variable ?  a named storage

// declaring a variable
let client;
// declaring multiple variables at once
let cat, mouse;

// assignment
cat = 'Tom';

// variable is initialized
// = assignment operator
let name = 'Yoda';

// if variable is only declared it is undefined
console.log(mouse);

// declaration and initialization at once 
// the variable name is called indentifier
let age = 31;

// naming 
// there are 2 difficult things in computer science cache invalidation and naming
// why is naming important ?
// what is the worst variable name? data - second worst data2 
// abbreviations are ambigious : what is char ? character or characteristic , what does mod mean?
// multiple meaningless is still meaningless: AbstractObjectFormatter
// use precise words : instead of manager - is it a supervisor, builder, planner 

// variable names should be descriptive and concise
let a = 56; // ❌
let user;

// some names are not possible
//  the first character must be a letter, or an underscore (_), or a dollar sign ($).
// Subsequent characters may be letters, digits, underscores, or dollar signs.
// variable names cannot begin with numbers
// reserved keywords
// let for = 'abc'; ❌

// use camelCase
let userName;


// variables declared with let can be reassigned
name = 'James';

// variables declared with const cannot be reassigned
const port = 3000;
// port = 5555; // ❌  

// use const whenever possible
// never use var

// javascript is dynamically typed - types get determined at runtime
let phoneNumber = 893021;

console.log('the type is:', typeof phoneNumber);
phoneNumber = '+49382901';
console.log('the type is:', typeof phoneNumber);






// data types - number and string 

// there are two types of data types - objects and primitive data types
// primitive types: number, string, boolean, null, undefined, symbol

// you can check the type with typeof
let userName = 'joe';

console.log('the type is now:', typeof userName);

userName = 42;

console.log('the type is now:', typeof userName);



// let's look at number and string now

// javascript is dynamically typed - there are other languages that are static or strong typed
// in java for example you choose the type when you declare a type
// in javascript the type is determined at runtime - javascript is interpreted and java or typescript is compiled 


// numbers can be integers and floating numbers
const distance = 70000;
const price = 19.99;

// also to Number belongs NaN - which stands for Not a number - a computational console.error;
console.log('hello' * 3);

// Math operators
const sum = 1 + 1; // addition
1 - 0; // subtraction
6 * 7; // multiplication
4 / 2; // division

4 % 2; // modulo (remainder)
3 ** 3; // exponentiation

// Expression is the combination of any values and operator that results in another value
2 + 4 * 3;

// Assignment operators
let x = 0;

// add 1 - addition asignment
x += 1; // x = x + 1;

// subtract 2
x -= 2; //x = x - 2;

// multiply by 3
x *= 3; // x = x * 3;

// divide by 4
x /= 4; // x = x /4;

// modulo 5
x %= 5; // x = x % 5

// to the power of 6
x **= 6; // x = x ** 6


// strings 
// string is a sequence of characters
name = 'Jack';
name = "Jack";
name = `Jack`;

// backticks can embed variables 
// const greeting = `Hello ${name}`;

// use backslash to escape special characters and to add a newline
const list = ' coffee \n apples \n club mate';
console.log(list);

// string properties and methods
// useful property of a string is length
console.log('hello world'.length); // 11

// string methods
const greeting = 'Hello';

// accessing characters
greeting.charAt(0);
greeting[0];

name = 'Jane Doe'

let country = 'France';

let customGreeting = greeting + ' ' + name + ' from ' + country;
// const customGreeting = `${greeting} ${name} from ${country}`;

// customGreeting = customGreeting + "!!!";
customGreeting += '!!!';

let firstName = 'John';
let lastName = 'Doe';

const initials = firstName[0] + lastName[0];

// Using the square bracket notation, target the last character in `customGreeting`

const lastChar = customGreeting[customGreeting.length - 1];

// .length is a property that comes with values of type string

// indexOf
// target.indexOf(substring) -> return the position of the first occurence of the substring in the target string, or -1

greeting.indexOf("H"); // 0
greeting.indexOf("h"); // -1
greeting.indexOf("lo"); // 3
greeting.indexOf("l"); // 2

// lastIndexOf works as indexOf but from the end of the string
greeting.lastIndexOf("l"); // 3

// slice returns a substring from a string with a given range specified as parameters
name.slice(0, 4); // "Jane" 0 to 4 exclusive
name.slice(5); // "Doe" only one parameter -> from there to the end
name.slice(); // "Jane Doe" without parameter -> everything

const idx = name.indexOf(" ");
name = name.slice(0, idx) + name.slice(idx).toUpperCase();
// "Jane DOE"

name[0] = "j";
// "Jane DOE"

// Strings, like numbers and all the other primitives are immutable -> meaning they can't be altered



// boolean - undefined and null - immutability
// boolean expression evaluates either to true or false
// falsy values are : 0, '', null, undefined, NaN
// boolean operators

// Boolean expressions
5 > 3; // true
0 <= -1; // false

// const firstName = 'Jan';
// firstName === 'Jan'; // true
// firstName === 'Michael'; // false

// logical operators
// OR ||
// the || operator will evaluate to the first truthy expression it encounters, or to the last falsy expression
5 > 3 || 10 || "abc"; // true
false || 0 || 42 || "def"; // 42
4 < 3 || "" || 0 || NaN; // NaN

// AND &&
// the && operator will evaluate to the first falsy expression it encounters or to the last truthy expression
true && 1; // 1
42 && null && undefined && "xyz"; // null
-1 && "2" && -3; // -3

// NOT !
// the ! operator will return a boolean that is the negated value of the expression
!false; // true
!42; // false
!(4 > 2); // false

let foo;
console.log(foo); // undefined

// undefined represents the unintentional absence of value
(10).length; // undefined

// null represents the intentional absence of value

// conditionals and loops

/*
const age = Number(prompt("How old are you?"));
if (age >= 18) {
  alert("You can apply for a driving license in Germany");
} else if (age === 17) {
  alert("You can apply for accompanied driving");
} else {
  alert("You are too young to apply for a driving license");
}
const language = prompt("What is your mother tongue?");
switch (language) {
  case "french":
    console.log("Bonjour!");
    break;
  case "english":
    console.log("Hello!");
    break;
  case "spanish":
    console.log("Hola!");
    break;
  case "italian":
    console.log("Ciao!");
    break;
  default:
    console.log("Non recognized language");
}
let counter = 1;
while (counter <= 100) {
  console.log(counter);
  counter += 1;
}
*/

for (let counter = 100; counter >= 1; counter -= 1) {
    console.log(counter);
}

// use case for while

let password = prompt('enter password');
while (password !== '123') {
    password = prompt('enter password');
}
alert('password is correct');

// maybe show do while as well : same function :
// let password = prompt('enter password');
// do {
//     password = prompt('enter password');
// }
// while (password !== '123');
// alert('password is correct');