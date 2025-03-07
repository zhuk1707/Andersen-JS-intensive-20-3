// Create a regular object and make it iterable.
// In this case, the iteration should proceed as follows:
// All values from the object's from property to the to property must be traversed one by one.
// (if to < from - an error should occur).
// If to or from is not specified OR to or from are not numbers, an error should occur.
//
// > Examples:
// const myIterable = { from: 1, to: 4 };
// for (let item of myIterable) {
//   console.log(item); // 1, 2, 3, 4
// }
//
// const myIterable = { from: 'aaa', to: 4 };
// for (let item of myIterable) { // Error!
//   console.log(item);
// }

const myIterable = {
  from: 1,
  to: 4,

  [Symbol.iterator]() {
    this.current = this.from
    return this
  },

  next() {
    const error = () => {
      console.log('Error!')
      return {done: true}
    }

    if (!this.hasOwnProperty('from') || !this.hasOwnProperty('to')) {
      error()
    }

    if (isNaN(this.from) || isNaN(this.to)) {
      error()
    }

    if (this.to < this.from) {
      error()
    }

    if (this.current <= this.to) {
      return {done: false, value: this.current++}
    } else {
      return {done: true}
    }

  }
}

for (let item of myIterable) {
  console.log(item); // 1, 2, 3, 4
}
