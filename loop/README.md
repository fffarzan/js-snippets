# FOR-IN

Iterates over all enumerable string properties of an object (ignoring properties keyed by symbols) and those the object inherits from its prototype chain (less priorities).

non-enumerable props: `indexOf()`, `toString()` inherited from `Array.prototype` and `object.prototype`

await: is not allowed (reason: variable is always a string or symbol while await require a disposable object).

How it works:

- get all own props (like `Object.getOwnPropertyNames()`).
- set all props visited (with `Reflect` things).
- replace the object with its prototype --> back to first.

It is best not to add, modify, or remove properties from the object during iteration. Any property added to the currently visited object during iteration will not be visited, because all own properties of the current object have already been saved beforehand.

- except: the property currently being visited

The spec explicitly allows the implementation to not follow the algorithm above in one of the following cases:

- The object's prototype chain is modified during iteration.
- A property is deleted from the object or its prototype chain during iteration.
- A property is added to the object's prototype chain during iteration.
- A property's enumerability is changed during iteration.

Unlike for...of, for...in uses property enumeration instead of the array's iterator. In sparse arrays, for...of will visit the empty slots, but for...in will not. It is better to use a for loop with a numeric index, Array.prototype.forEach(), or the for...of loop, because they will return the index as a number instead of a string, and also avoid non-index properties.

Object.keys will return a list of enumerable own string properties, while Object.getOwnPropertyNames will also contain non-enumerable ones.

Many JavaScript style guides and linters recommend against the use of for...in, because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used for...of loop.
