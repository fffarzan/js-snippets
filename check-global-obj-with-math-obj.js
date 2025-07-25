// Check the object is global object with checking Math object inside of it

const obj = globalThis;

// This is a trick to figure out the global object.
if (obj.Math === Math) {
  console.log('obj is a global object!')
}