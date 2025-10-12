// Objects in JavaScript
// An object is a collection of key-value pairs, where each key is a string (or symbol) and the value can be of any data type.
// Objects are referrence types and are mutable (can be changed after creation).



const myCity = {       // recommended to use const always when declaring variable as an object
  city: "New York",
  popular: true,        // (propertie)key: 'value' /order of properties does not matter in objects
  country: 'USA'
};

// dot notation to access the value of a key in an object
console.log(myCity.city); // New York

// bracket notation to access the value of a key in an object
console.log(myCity['country']); // USA

console.log(myCity.popular); // true

/* 
Adding a new key-value pair to the object
*/
 myCity['state'] = 'NY';  // alternative way using bracket notation

 const countryPropertyName = 'country';
  myCity[countryPropertyName] = 'USA';  // using variable as key name

  console.log(myCity); // { city: 'New York', popular: true, country: 'USA', state: 'NY' }


myCity.state = 'NY';
console.log(myCity); // { city: 'New York', popular: true, country: 'USA', state: 'NY' }

// updating an existing key-value pair in the object
myCity.popular = false;
console.log(myCity); // { city: 'New York', popular: false, country: 'USA', state: 'NY' }

// deleting a key-value pair from the object, delete operator is used
delete myCity.state; 
console.log(myCity); // { city: 'New York', popular: false, country: 'USA' }

// checking if a key exists in the object
console.log('city' in myCity); // true
console.log('state' in myCity); // false

// iterating over the keys of the object
for (let key in myCity) {
  console.log(key + ": " + myCity[key]);
}
// Output:
// city: New York
// popular: false
// country: USA

// getting all keys of the object
console.log(Object.keys(myCity)); // [ 'city', 'popular', 'country' ]

// getting all values of the object
console.log(Object.values(myCity)); // [ 'New York', false, 'USA' ]

// getting all entries (key-value pairs) of the object
console.log(Object.entries(myCity)); 
// [ [ 'city', 'New York' ], [ 'popular', false ], [ 'country', 'USA' ] ]

// nested object
const user = {
  name: "Alice",
  age: 30,
  address: {  //nested object can be more than one level deep
    street: "123 Main St",
    city: "New York",
    country: "USA"
  }
};

console.log(user.address.city); // New York -- need to use two dot notations to access nested object property
deleteuser.address.street; // deleting a property from nested object

// Using variables as keys in object literals (ES6 feature)
const key1 = 'name';
const key2 = 'age';

const person = {
  key1: 'Bob',  // this will create a key named 'key1' not 'name'
  key2: 25      // this will create a key named 'key2' not 'age'
};

const correctPerson = {
  key1: key1,  // this will create a key named 'key1' with value 'Bob'
  key2: key2   // this will create a key named 'key2' with value 25
};

const es6Person = {
  [key1]: 'Bob',  // this will create a key named 'name' with value 'Bob'
  [key2]: 25    // this will create a key named 'age' with value 25
};

const anotherPerson = {
  key1,
  key2
}
console.log(anotherPerson); // { key1: 'name', key2: 'age' }  -- shorthand property names in ES6

/* window object in browsers is a global object that represents the browser window or tab.
All global variables and functions are properties of the window object.
For example, if you declare a global variable like this:
var myVar = 10;
It is equivalent to:
window.myVar = 10;
You can access the variable using window.myVar or simply myVar.
Similarly, if you declare a global function like this:
function myFunc() {
  console.log("Hello, World!");
}
It is equivalent to:
window.myFunc = function() {
  console.log("Hello, World!");
}
You can call the function using window.myFunc() or simply myFunc().
Note that in Node.js, the global object is called global instead of window.
*/

console.log('Hello'); // this will work because console is a property of the window object
window.console.log('Hello'); // this will also work
global.console.log('Hello'); // this will work in Node.js environment

const myCity = {
  city: "New York",
  cityGreeting: function () {
    console.log('Greetings!!')
  }
}; // cityGreeting is a method in an object, a function that is a property of the object
myCity.cityGreeting(); // Greetings!!

const myCity = {
  city: "New York",
  cityGreeting() {   // shorthand method definition in ES6
    console.log('Greetings!!')
  }
};
myCity.cityGreeting(); // Greetings!!

myCity.city // accessing property
myCity.cityGreeting() // calling method

// Object is a set of properties and somo of them are methods (functions that are properties of the object).
// Methods are used to define behaviors of the object, they can manipulate the object's properties and perform actions related to the object.

// 'this' keyword in object methods refers to the current object
const myCity = {
  city: "New York",
  country: "USA",
  cityGreeting() {
    console.log(`Welcome to ${this.city}, ${this.country}`); // using 'this' to access properties of the current object
  }
};
myCity.cityGreeting(); // Welcome to New York, USA

// Arrow functions do not have their own 'this', they inherit 'this' from the surrounding lexical context
const myCity = {
  city: "New York",
  country: "USA",
  cityGreeting: () => {
    console.log(`Welcome to ${this.city}, ${this.country}`); // 'this' does not refer to myCity object here
  }
};
myCity.cityGreeting(); // Welcome to undefined, undefined

// To fix the above issue, use regular function syntax for methods that need to access 'this'
const myCity = {
  city: "New York",
  country: "USA",
  cityGreeting() {  // regular function syntax
    console.log(`Welcome to ${this.city}, ${this.country}`); // 'this' correctly refers to myCity object
  }
};
myCity.cityGreeting(); // Welcome to New York, USA
