function spyDecorator() {
  function work(a, b) {
    console.log(a + b);
  }

  function spy(fn) {
    const calls = [];
    const func = function (...arg) {
      calls.push(arg);
      fn.apply(this, arg);
    }
    func.calls = calls;
    return func;
  }

  work = spy(work);

  work(1, 2, 5, 7, 8); // 3
  work(4, 5); // 9

  for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
  }
}
// spyDecorator();

function delayDecorator() {
  function f(x) {
    console.log(x);
  }

  function delay(fn, timer) {
    return function (...arg) {
      setTimeout(() => {
        fn.apply(this, arg);
      }, timer);
    }
  };

  let f1000 = delay(f, 1000);
  let f1500 = delay(f, 1500);

  f1000("test"); // показывает "test" после 1000 мс
  f1500("test"); // показывает "test" после 1500 мс
}
// delayDecorator();

function debounceDecorator() {
  const results = [];

  function log(text) {
    return text;
  }

  function debounce(fn, timeout) {
    let startTimer = null;

    return function (...arg) {
      if (!startTimer) {
        startTimer = setTimeout(() => {
          startTimer = null;
          results.push(fn.apply(this, arg));
        }, timeout);
      }
    }
  }

  let f = debounce(log, 1000);


  f(1); // выполняется немедленно
  f(2); // проигнорирован

  setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
  setTimeout(() => f(4), 1100); // выполняется
  setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
  setTimeout(() => f(55), 3500); // выполняется
  setTimeout(() => console.log(results), 5000); // показать результат всех функций
};
// debounceDecorator();


