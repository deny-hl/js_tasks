/* JSON - JavaScript Object Notation
JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is often used for transmitting data between a server and a web application as text.
JSON is a subset of JavaScript object syntax, but it is language-independent and can be used in many programming languages.
JSON transmits as a string format, which means that all keys and string values must be enclosed in double quotes. Other data types such as numbers, booleans, arrays, objects, and null do not require quotes.


JSON supports the following data types:
- String: A sequence of characters enclosed in double quotes. Example: "Hello, World!"
- Number: A numeric value (integer or floating-point). Example: 42, 3.14
- Boolean: A logical value that can be either true or false. Example: true, false
- Array: An ordered list of values enclosed in square brackets. Example: [1, 2, 3], ["apple", "banana", "cherry"]
- Object: A collection of key-value pairs enclosed in curly braces. Example: {"name": "Alice", "age": 30}
- null: Represents an empty or non-existent value. Example: null

JSON does not support functions, undefined values, or comments.

Here is an example of a JSON object:
*/

{
  "name": "Alice", // key(property) must be in double quotes, string values must be in double quotes
  "age": 30,
  "isStudent": false,
  "courses": ["Math", "Science", "History"],
  "address": {
    "street": "123 Main St",
    "city": "New York",
    "country": "USA"
  },
  "phoneNumbers": null
}

/*
In JavaScript, you can convert a JavaScript object to a JSON string using JSON.stringify(),
 and parse a JSON string back into a JavaScript object using JSON.parse().
*/