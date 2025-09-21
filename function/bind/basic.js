const obj = {
  x: 42,
  getX() {
    return this.x;
  },
};

console.log(obj.getX());

// We are separating the function from its origin scope.
const unboundGetX = obj.getX;
// console.log(unboundGetX()); // undefined

const boundGetX = unboundGetX.bind(obj);
console.log(boundGetX());
