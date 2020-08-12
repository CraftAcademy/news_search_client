## Written Exam

What is, and how can you use the **spread syntax** `(...)` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

```
allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

```
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6