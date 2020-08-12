## Written Exam

What is, and how can you use the **spread syntax** `(...)` in JavaScript?

### **spread syntax** `(...)`

Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.


#### Syntax

For function calls:

`myFunction(...iterableObj);`

For array literals or strings:

`[...iterableObj, '4', 'five', 6];`

For object literals:

`let objClone = { ...obj };`


##### Examples

When working with arrays literals:

`studentNames = ["Viktor", "Odeane", "Felix", "Alex", "Sima"]`
`coachNames = ["Emma", "Oliver", "Thomas", "Noel"]`

`allNames = [ ...studentNames, ...coachNames]`
`allNames = ["Viktor", "Odeane", "Felix", "Alex", "Sima", "Emma", "Oliver", "Thomas", "Noel"]`