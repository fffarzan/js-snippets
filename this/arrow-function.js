// Q1
const objQ1 = {
  getThisGetter() {
	console.log('this from inside of getThisGetter:', this);

    const getter = () => this;

    return getter;
  },
};

const fn1Q1 = objQ1.getThisGetter();
console.log('fn1Q1:', fn1Q1()); // objQ1

// 'this' acts in runtime, not in compile time
const fn2Q1 = objQ1.getThisGetter;
console.log('fn2Q1:', fn2Q1()()); // global this in non-strict mode

// ====================================================================================================================

