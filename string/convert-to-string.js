var checkIsArray = function (value) {
  return Array.isArray(value);
};

var convertToString = function (value) {
  if (typeof value === "object" && value !== null && !checkIsArray(value)) {
    return "Object";
  }
  return String(value);
};

console.log(convertToString("test"));
console.log(convertToString(1));
console.log(convertToString({}));
console.log(convertToString([]));
console.log(convertToString(function () {}));
