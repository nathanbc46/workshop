//function
console.log(greetFunction('Nathan'));
function greetFunction(name) {
    return `function : Hello, ${name}!`;
};

//Expression
const greetExpression = function(name){
    return `Expression : Hello, ${name}`
}
console.log(greetExpression('John'))

//arrow function
const greetArrow = (name) => {
    return `Hello, ${name}`
}
console.log(greetArrow('Jane'))

//short arrow function with multiple parameters
const greetMultiParam = (name,age) => `hello, ${name} is ${age} years old!`;
console.log(greetMultiParam('Doe',40));

//short arrow function with single parameter
const greetSingleParam = name => `Hello, ${name}`;
console.log(greetSingleParam('Smith'));