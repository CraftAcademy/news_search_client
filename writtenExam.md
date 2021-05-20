## Written Exam

What is, and how can you use the **spread syntax** `(...)` in JavaScript?

Please give an as extensive explanation as possible with code examples and potential use cases. Write your answer below and use markdown to format your text.

**It's how to interpolate information from arrays or objects into the same array or object.**

```js
const state = {
  name: 'Lucas',
  age: 27,
}

let expandedState = {
  ...state,
  height: 193
}

console.log(expandedState)

// {
  name: 'Lucas',
  age: 27,
  height: 193
}
```
