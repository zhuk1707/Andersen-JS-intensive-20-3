// You need to implement a function that will take a person's name and age as arguments
// and then return an array of objects.
// Each object must be created in a unique way.
// Additionally - it is not necessary to write these properties as your own for the object,
// you can play with prototypes


function getPersons(name, age) {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  return [
    {name, age},
    Object.assign({}, {name, age}),
    Object.create({}, {name: {value: name, enumerable: true}, age: {value: age, enumerable: true}}),
    Object.fromEntries([['name', name],['age', age]]),
    new Person(name, age),
    JSON.parse(`{"name": "${name}", "age": ${age}}`),
  ]
}

console.log(getPersons('John Doe', 42));

