function sum(a, b, c) {
  return a + b + c;
}

function carry(f) {
  return function wrapper(...arg) {
    if (f.length >= arg.length) {
      return f.apply(this, arg)
    }
    return function (...arg2) {
      return wrapper.apply(this, [...arg, ...arg2]);
    }
  }
}

const carrySum = carry(sum);
const currySum2 = carrySum(1)(5);

console.log(currySum2(31));
