// -----------------------------tasks about hoisted----------------------------
// 1.
function firstTask() {
  console.log(name); // undefined 
  console.log(age); // error
  var name = 'Lydia';
  let age = 21;
}
// sayHi();

// 2. -----------------------------task about global scope and block-scope----------------------------
function secondTask() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  // here => i === 3
  // 3 3 3

  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }
  // here i => undefined
  // 0 1 2 
}
// secondTask();

// 3.  -----------------------------task about arrow function, this, and convert data ----------------------------
function thirdTask() {
  const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
  };

  console.log(shape.diameter()); // => 10 * (multiply) 2 === 20
  console.log(shape.perimeter()); // NaN because arrow function hasn't this and this.radius will be undefined
}
// thirdTask();

// 4.  -----------------------------task about convert data ----------------------------
function fourthTask() {
  console.log(+true); // true convert to 1
  console.log(!'Lydia'); // string convert to true then ! => convert true to false 
}

// 5.  ----------------------------- task about object property and call that ----------------------------
function fifthTask() {
  const bird = {
    size: 'small',
  };

  const mouse = {
    name: 'Mickey',
    small: true,
  };
  // which one is return true ??
  // mouse.bird.size is not valid
  // B: mouse[bird.size] is not valid
  // C: mouse[bird["size"]] is not valid
  // D: All of them are valid


  console.log(mouse[bird.size]); // return true
  console.log(mouse[bird["size"]]); // return true 
  console.log(mouse.bird.size); // is not valid 
}
// fifthTask();

// 6.  ----------------------------- task about object interact by reference ----------------------------
function sixthTask() {
  let c = { greeting: 'Hey!' };
  let d;

  d = c;
  c.greeting = 'Hello';
  console.log(d.greeting); // Hello
}
// sixthTask();

// 7.  ----------------------------- task about function constructor Number and compare it  ----------------------------
function seventhTask() {
  let a = 3; // typeof Number
  let b = new Number(3); // => typeof Object b = { [[PrimitiveValue]]: 3  } => when we get b we get getter this object who return [[PrimitiveValue]]
  let c = 3;

  console.log(a == b); // true 
  console.log(a === b); // false 
  console.log(b === c); // false 
}
// seventhTask();

// 8.   ----------------------------- task about class and static methods  ----------------------------
function eighthTask() {
  class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }

    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
  }

  const freddie = new Chameleon({ newColor: 'purple' }); // => { newColor: 'purple' };
  console.log(freddie.colorChange('orange')); // error: freddie.colorChange is not a function because only class Chameleon will be able to use method colorChange 
}
// eighthTask();

// 9.  ----------------------------- stupid task  ----------------------------
function ninthTask() {
  let greeting;
  greetign = {};
  console.log(greetign); // {} 
}
// ninthTask();

// 10.  ----------------------------- task about function and what is this  ----------------------------
function tenthTask() {
  function bark() {
    console.log('Woof!');
  }

  bark.animal = 'dog'; // Nothing, this is totally fine!

  // What happens when we do this? =>> Nothing, this is totally fine!
  // A: Nothing, this is totally fine!
  // B: SyntaxError.You cannot add properties to a function this way.
  // C: "Woof" gets logged.
  // D: ReferenceError
}
// tenthTask();

// 11. ----------------------------- task about function constructors and prototype inheritance  ----------------------------
function eleventh() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  const member = new Person('Lydia', 'Hallie');
  Person.getFullName = function () { // this mistake => Person.prototype.getFullName
    return `${this.firstName} ${this.lastName}`;
  };

  console.log(member.getFullName()); // error: getFullName is not function
}
// eleventh();

// 12. ----------------------------- task about function constructors and operator new  ----------------------------
function twelfthTask() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  const lydia = new Person('Lydia', 'Hallie'); // {firstName: Lydia, lastName: Hallie}
  const sarah = Person('Sarah', 'Smith'); // undefined

  console.log(lydia);
  console.log(sarah);
}
// twelfthTask()

// 13. ----------------------------- task about event propagation  ----------------------------
function thirteenthTask() {
  // What are the three phases of event propagation? 

  // A: Target > Capturing > Bubbling
  // B: Bubbling > Target > Capturing
  // C: Target > Bubbling > Capturing
  // D: Capturing > Target > Bubbling
}

// 14. ----------------------------- task about prototypes  ----------------------------
function fifteenTask() {
  // All object have prototypes.
  // A: true
  // B: false // Object.create(null) --> prototype => null && Object.prototype => null
}

// 15. ----------------------------- task about dynamically types  ----------------------------
function sixteenthTask() {
  function sum(a, b) {
    return a + b;
  }
  console.log(sum(1, '2')); // => 12
}
// sixteenthTask();

// 16. ----------------------------- task about unary operators  ----------------------------
function seventeenthTask() {
  let number = 0;
  console.log(number++); // 0
  console.log(++number); // 2
  console.log(number); // 2
}
// seventeenthTask();

// 17. 
function eighteenthTask() {
  function getPersonInfo(one, two, three) {
    console.log(one); // [ '', ' is ', ' years old' ]
    console.log(two); // Lydia
    console.log(three); // 21
  }

  const person = 'Lydia';
  const age = 21;

  getPersonInfo`${person} is ${age} years old`;
}
// eighteenthTask();

// 18.  ----------------------------- task about equally objects  ----------------------------
function nineteenthTask() {
  function checkAge(data) {
    if (data === { age: 18 }) { // {} always !== {}
      console.log('You are an adult!');
    } else if (data == { age: 18 }) { // {} always !== {}
      console.log('You are still an adult.');
    } else {
      console.log(`Hmm.. You don't have an age I guess`); // this text will be spell 
    }
  }

  checkAge({ age: 18 });
}
// nineteenthTask();

// 19.  ----------------------------- task about ...rest and type array  ----------------------------
function twentyTask() {
  function getAge(...args) {
    console.log(typeof args); // object => array
  }

  getAge(21);
}
// twentyTask();

// 20. ----------------------------- task about use strict mode  ----------------------------
function twentyFirstTask() {
  function getAge() {
    'use strict';
    // age = 21; // reference-error, when you used 'use strick' mode
    // console.log(age);
  }

  getAge();
}
// twentyFirstTask();

// 21. ----------------------------- task about func eval  ----------------------------
function twentySecondTask() {
  const sum = eval('10*10+5');
  console.log(sum); // 105 => eval evaluates codes that's passed as a string. If it's an expression, like in this case, it evaluates the expression. The expression is 10 * 10 + 5. This returns the number 105.
}

// 22.  ----------------------------- task about sessionStorage ----------------------------
function twentySecondTask() {
  // How long is cool_secret accessible?

  sessionStorage.setItem('cool_secret', 123); // => When the user closes the tab.

  // A: Forever, the data doesn't get lost.
  // B: When the user closes the tab.
  // C: When the user closes the entire browser, not only the tab.
  // D: When the user shuts off their computer.
}

// 23.   ----------------------------- task about variables ----------------------------
function twentyThirdTask() {
  var num = 8;
  var num = 10;

  console.log(num); // 10
}
// twentyThirdTask();

// 24.  ----------------------------- task about object and set ----------------------------
function twentyFourthTask() {
  const obj = { 1: 'a', 2: 'b', 3: 'c' };
  const set = new Set([1, 2, 3, 4, 5]);

  console.log(obj.hasOwnProperty('1')); // true
  console.log(obj.hasOwnProperty(1)); // true
  console.log(set.has('1')); // false
  console.log(set.has(1)); // true
}
// twentyFourthTask();

// 25. ----------------------------- task about object and its property ----------------------------
function twentyFifthTask() {
  const obj = { a: 'one', b: 'two', a: 'three' };
  console.log(obj); // {a: 'three, b: 'two'}
}
// twentyFifthTask();

// 26. ----------------------------- task about global object, and the "this" ----------------------------
function twentySixthTask() {
  // The JavaScript global execution context creates two things for you: the global object, and the "this" keyword.
  // A: true
  // B: false
  // C: it depends
  // A => The base execution context is the global execution context: it's what's accessible everywhere in your code.
}

// 27. ----------------------------- task about loop and operator continue ----------------------------
function twentySeventhTask() {
  for (let i = 1; i < 5; i++) {
    if (i === 3) continue;
    console.log(i); // 1 2 4 
  }
}
// twentySeventhTask();

// 28.  ----------------------------- task about prototypes inheritance ----------------------------
function twentyEighthTask() {
  String.prototype.giveLydiaPizza = () => {
    return 'Just give Lydia pizza already!';
  };

  const name = 'Lydia';

  console.log(name.giveLydiaPizza()) // => Just give Lydia pizza already!
}
// twentyEighthTask();

// 29. ----------------------------- task about prototypes inheritance ----------------------------
function twentyNinthTask() {
  const a = {};
  const b = { key: 'b' };
  const c = { key: 'c' };

  a[b] = 123; // => a['[object Object]'] = 123;
  a[c] = 456; // => a['[object Object]'] = 456;

  console.log(a[b]); // 456 => because object can includes only string keys, and another object convert to string '['object Object']'
}
// twentyNinthTask();

// 30. ----------------------------- task about propagation ----------------------------
function thirtyTask() {
  // What is the event.target when clicking the button?
  // <div onclick="console.log('first div')">
  //   <div onclick="console.log('second div')">
  //     <button onclick="console.log('button')">
  //       Click!
  //     </button>
  //   </div>
  // </div>
  // A: Outer div
  // B: Inner div
  // C: button ==> right answer 
  // D: An array of all nested elements.
}

// 31. ----------------------------- task about propagation ----------------------------
function thirtyFistTask() {
  // When you click the paragraph, what's the logged output?
  // <div onclick="console.log('div')">
  //   <p onclick="console.log('p')">
  //     Click here!
  //   </p>
  // </div>
  // log(p) then log(div)
  // If we click p, we see two logs: p and div. During event propagation, there are 3 phases: capturing, target, and bubbling. By default, event handlers are executed in the bubbling phase (unless you set useCapture to true). It goes from the deepest nested element outwards. 
}

// 32. ----------------------------- task about call and bind operators ----------------------------
function thirtySecondTask() {
  const person = { name: 'Lydia' };

  function sayHi(age) {
    return `${this.name} is ${age}`;
  }

  console.log(sayHi.call(person, 21)); // Lydia is 21 
  console.log(sayHi.bind(person, 21)); // function 
}
// thirtySecondTask();

// 33.----------------------------- task about type and function returns ----------------------------
function thirtyThreeTask() {
  function sayHi() {
    return (() => 0)();
  }

  console.log(typeof sayHi()); // number
}
// thirtyThreeTask();

// 34. ----------------------------- task about falsy and truly types ----------------------------
function thirtyFourthTask() {
  // Which of these values are falsy?
  console.log(!!0); // falsy
  console.log(!!new Number(0)); // truly 
  console.log(!!''); // falsy
  console.log(!!" "); // truly 
  console.log(!!new Boolean(false)); // truly
  console.log(!!undefined); // falsy
}
// thirtyFourthTask();

// 35. ----------------------------- task about typeof for typeof ----------------------------
function thirtyFifthTask() {
  console.log(typeof typeof 1); // string of course 
}

// 36. ----------------------------- task about elements array ----------------------------
function thirtySixthTask() {
  const numbers = [1, 2, 3];
  numbers[10] = 11;
  console.log(numbers); //  [1, 2, 3, <7 empty items>, 11(index = 10)]
}
// thirtySixthTask();

// 37. ----------------------------- task about block-scope ----------------------------
function thirtySeventhTask() {
  (() => {
    let x, y;
    try {
      throw new Error();
    } catch (x) {
      (x = 1), (y = 2);
      console.log(x); // 1 
    }
    console.log(x); // undefined 
    console.log(y); // 2
  })();
}
// thirtySeventhTask();

// 39. ----------------------------- task about types is javascript ----------------------------
function thirtyNinthTask() {
  // Everything in JavaScript is either a...
  // A: primitive or object // true 
  // B: function or object
  // C: trick question! only objects
  // D: number or object
}

// 40. ----------------------------- task about array's method reduce ----------------------------
function fortyTask() {
  let arr = [[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
  console.log(arr); // [1, 2, 0, 1, 2, 3]
}
// fortyTask();

// 41. 
function fortyFirstTask() {
  console.log(!!null); // false
  console.log(!!''); // false 
  console.log(!!1); // true
}
// fortyFirstTask();

// 42. ----------------------------- task about setInterval function ----------------------------
function fortySecondTask() {
  // What does the setInterval method return in the browser?
  setInterval(() => console.log('Hi'), 1000); // return uniq id

  // A: a unique id => true
  // B: the amount of milliseconds specified
  // C: the passed function
  // D: undefined
}

// 43.  ----------------------------- task about spreed operator and strings ----------------------------
function fortyThirtyTask() {
  console.log([...'Lydia']); // ['l', 'y', 'd', 'i', 'a']
}
// fortyThirtyTask();

// 44. ----------------------------- task about function generator ----------------------------
function fortyFourthTask() {
  function* generator(i) {
    yield i;
    yield i * 2;
  }

  const gen = generator(10);

  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 20
}
// fortyFourthTask();

// 45. ----------------------------- task about promise's methods ----------------------------
function fortyFifthTask() {
  const firstPromise = new Promise((res, rej) => {
    setTimeout(res, 500, 'one');
  });

  const secondPromise = new Promise((res, rej) => {
    setTimeout(res, 100, 'two');
  });

  Promise.race([firstPromise, secondPromise]).then(res => console.log(res)); // two => because Promise.race return first promise that resolves/rejects
}
// fortyFifthTask();

// 46.  ----------------------------- task about object reference data ----------------------------
function fortySixthTask() {
  let person = { name: 'Lydia' }; // person => {name: 'Lydia'}
  const members = [person]; // [][0] => {name: 'Lydia'}
  person = null; // person => null but [][0] => {name: 'Lydia'}

  console.log(members); // then [0: {name: 'Lydia'}] => log { name: 'Lydia' }
}
// fortySixthTask();

// 47.  ----------------------------- task about object loop ----------------------------
function fortySeventhTask() {
  const person = {
    name: 'Lydia',
    age: 21,
  };

  for (const item in person) {
    console.log(item); // name, age 
  }
}
// fortySeventhTask();

// 48. ----------------------------- task about convert data ----------------------------
function fortyEightTask() {
  console.log(3 + 4 + '5'); // 75
}
// fortyEightTask();

// 49. ----------------------------- task about methods number ----------------------------
function fortyNinthTask() {
  const num = parseInt('7*6', 10); // => 7
}
// fortyNinthTask();

// 50.  ----------------------------- task about array's methods ----------------------------
function fiftyTask() {
  let a = [1, 2, 3].map(num => {
    if (typeof num === 'number') return;
    return num * 2;
  });
  console.log(a); // [undefined, undefined, undefined]
}
// fiftyTask();

// 51. ----------------------------- task about reference data ----------------------------
function fiftyFirstTask() {
  function getInfo(member, year) {
    member.name = 'Lydia';
    year = '1998';
  }

  const person = { name: 'Sarah' };
  const birthYear = '1997';

  getInfo(person, birthYear);

  console.log(person, birthYear); // { name: 'Lydia' }, '1997'
}
// fiftyFirstTask();

// 52. ----------------------------- task about throw ----------------------------
function fiftySecondTask() {
  function greeting() {
    throw 'Hello world!'; // SyntaxError: can only throw Error objects
  }

  function sayHi() {
    try {
      const data = greeting();
      console.log('It worked!', data);
    } catch (e) {
      console.log('Oh no an error:', e);
    }
  }

  sayHi(); // SyntaxError: can only throw Error objects
}
// sayHi();

// 53. ----------------------------- task about class returns ----------------------------
function fiftyThirtyTask() {
  function Car() {
    this.make = 'Lamborghini';
    return { make: 'Maserati' };
  }

  const myCar = new Car();
  console.log(myCar.make); // 'Maserati' 
}
// fiftyThirtyTask();

// 54. ----------------------------- task about block scoped and global scoped ----------------------------
function fiftyFourthTask() {
  // (() => {
  //   let x = (y = 10);
  // })();

  console.log(typeof x); // undefined
  console.log(typeof y); // number because y => var y = 10
}
// fiftyFourthTask();

// 55.  ----------------------------- task about class and their prototypes ----------------------------
function fiftyFifthTask() {
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  Dog.prototype.bark = function () {
    console.log(`Woof I am ${this.name}`);
  };

  const pet = new Dog('Mara');

  pet.bark(); // Woof I am Mara

  delete Dog.prototype.bark;

  pet.bark(); // .bark is not a function
}
// fiftyFifthTask();

// 56. ----------------------------- task about Set ----------------------------
function fiftySixthTask() {
  const set = new Set([1, 1, 2, 3, 4]);
  console.log(set); // [1, 2, 3, 4]
}
// fiftySixthTask();

// 57. ----------------------------- task about modules ----------------------------
function fiftySeventhTask() {
  // counter.js
  // let counter = 10;
  // export default counter;

  // index.js
  // import myCounter from './counter';

  // myCounter += 1;

  // console.log(myCounter); // error: An imported module is read-only:
}

// 58. ----------------------------- task about delete operator ----------------------------
function fiftyEighthTask() {
  const name = 'Lydia';
  age = 21;

  // The delete operator returns a boolean value: true on a successful deletion, else it'll return false.
  // console.log(delete name); // false
  console.log(delete age); // true
}
// fiftyEighthTask();

// 59.  ----------------------------- task about arrays ----------------------------
function fiftyNinthTask() {
  const numbers = [1, 2, 3, 4, 5];
  const [y] = numbers;

  console.log(y); // 1
}
// fiftyNinthTask();

// 60. ----------------------------- task about ...spreed operator----------------------------
function sixtyTask() {
  const user = { name: 'Lydia', age: 21 };
  const admin = { admin: true, ...user };

  console.log(admin); // {admin: true, name: 'Lydia', age: 21} 
}
// sixtyTask();

// 61. ----------------------------- task about object and Object methods ----------------------------
function sixtyFirstTask() {
  const person = { name: 'Lydia' };

  Object.defineProperty(person, 'age', {
    value: 21
  });

  console.log(person); // { name: 'Lydia', age: 21 }
  console.log(Object.keys(person)); //  ['name'] because definedProperty default create property with enumerable: false,
}
// sixtyFirstTask();


// 62.  ----------------------------- task about JSON's methods ----------------------------
function sixtySecondTask() {
  const settings = {
    username: 'lydiahallie',
    level: 19,
    health: 90,
  };

  const data = JSON.stringify(settings, ['level', 'health']);
  console.log(data); // "{"level":19, "health":90}"
}
// sixtySecondTask();

// 63.   ----------------------------- task about unary operators ----------------------------
function sixtyThirdTask() {
  let num = 10;

  const increaseNumber = () => num++;
  const increasePassedNumber = number => number++;

  const num1 = increaseNumber();
  const num2 = increasePassedNumber(num1);

  console.log(num1); // 10
  console.log(num2); // 10 
}
// sixtyThirdTask();

// 64. ----------------------------- task about spreed operator and copy object ----------------------------
function sixtyFourthTask() {
  const value = { number: 10 };

  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply(); // 20
  multiply(); // 20
  multiply(value); // 20
  multiply(value); // 40
}
// sixtyFourthTask();

// 65. ----------------------------- task about reduce method ----------------------------
function sixtyFifthTask() {
  [1, 2, 3, 4].reduce((x, y) => console.log(x, y)); // 1,2 undefined 3, undefined 4 => if we can't accumulator, reduce takes first element array and loop started for second element 
}
// sixtyFifthTask();

// 66. ----------------------------- task about extend class ----------------------------
function sixtySixthTask() {
  // With which constructor can we successfully extend the Dog class?
  class Dog {
    constructor(name) {
      this.name = name;
    }
  };

  class Labrador extends Dog {
    // 1
    // constructor(name, size) {
    //   this.size = size;
    // }
    // 2
    constructor(name, size) { // => this constructor is right
      super(name);
      this.size = size;
    }
    // 3
    // constructor(size) {
    //   super(name);
    //   this.size = size;
    // }
    // 4
    // constructor(name, size) {
    //   this.name = name;
    //   this.size = size;
    // }

  };
}

// 67. ----------------------------- task about modules ----------------------------
function sixtySeventhTask() {
  // What's the output?

  // index.js

  // console.log('running index.js'); // 2
  // import { sum } from './sum.js';
  // console.log(sum(1, 2)); // 3

  // sum.js

  // console.log('running sum.js'); // 1
  // export const sum = (a, b) => a + b;
}

// 68.----------------------------- task about global object constructors ----------------------------
function sixtyEighthTask() {
  console.log(Number(2) === Number(2)); // true 
  console.log(Boolean(false) === Boolean(false)); // true 
  console.log(Symbol('foo') === Symbol('foo')); // false 
}
// sixtyEighthTask()

// 69. ----------------------------- task about strings method padStart ----------------------------
function sixtyNinthTask() {
  const name = 'Lydia Hallie';
  // padStart(number), number -> say how long will be string after this method and add ' ' (space) in begin string
  console.log(name.padStart(13)); // ' Lydia Hallie'
  console.log(name.padStart(2)); // 'Lydia Hallie'
}
// sixtyNinthTask();

// 70. ----------------------------- task about concatenate strings ----------------------------
function seventyTask() {
  console.log('🥑' + '💻'); // '🥑💻'
}

// 71.  ----------------------------- task about function generator ----------------------------
function seventyFirstTask() {
  function* startGame() {
    const answer = yield 'Do you love JavaScript?';
    if (answer !== 'Yes') {
      return "Oh wow... Guess we're done here";
    }
    return 'JavaScript loves you back ❤️';
  }

  const game = startGame();
  console.log(game.next().value); // game.next().value =>> Do you love JavaScript?
  console.log(game.next("Yes").value); // game.next("Yes").value =>> JavaScript loves you back ❤️
}
// seventyFirstTask();

// 72. ----------------------------- task about promise ----------------------------
function seventySecondTask() {
  async function getData() {
    return await Promise.resolve('I made it!');
  }

  const data = getData();
  console.log(data); // promise => pending
}
// seventySecondTask();

// 73.  ----------------------------- task about array's methods ----------------------------
function seventyThirdTask() {
  function addToList(item, list) {
    return list.push(item);
  }

  const result = addToList('apple', ['banana']);
  console.log(result); // 2 => push return arr.length
}
// seventyThirdTask();

// 74. ----------------------------- task about object ----------------------------
function seventyFourthTask() {
  const box = { x: 10, y: 20 };

  Object.freeze(box);

  const shape = box;
  shape.x = 100;

  console.log(shape); // { x: 10, y: 20 }
}
// seventyFourthTask();

// 75. ----------------------------- task about function which can caches ----------------------------
function seventyFifthTask() {
  const add = () => {
    const cache = {};
    return num => {
      if (num in cache) {
        return `From cache! ${cache[num]}`;
      } else {
        const result = num + 10;
        cache[num] = result;
        return `Calculated! ${result}`;
      }
    };
  };

  const addFunction = add(); // => {} 
  console.log(addFunction(10)); // => 10 + 10 = 20 => {10: 20}; `Calculated! 20`
  console.log(addFunction(10)); // From cache! 20
  console.log(addFunction(5 * 2)); // From cache! 20
}
// seventyFifthTask();

// 76 ----------------------------- task about loop for...in and for...of ----------------------------
function seventySixthTask() {
  const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

  for (let item in myLifeSummedUp) {
    console.log(item); // 0 1 2 3 
  }

  for (let item of myLifeSummedUp) {
    console.log(item); // '☕', '💻', '🍷', '🍫'
  }
}
// seventySixthTask(); 

// 80 
function eightyTask() {
  const list = [1 + 2, 1 * 2, 1 / 2];
  console.log(list); // 0.5
}
// eightyTask();

// 81.  ----------------------------- task about functions ----------------------------
function eightyFirstTask() {
  function sayHi(name) {
    return `Hi there, ${name}`;
  }

  console.log(sayHi()); // Hi there, undefined
}
// eightyFirstTask();

// 82. ----------------------------- task about this and call ----------------------------
function eightySecondTask() {
  var status = '😎';

  setTimeout(() => {
    const status = '😍';

    const data = {
      status: '🥑',
      getStatus() {
        return this.status;
      },
    };

    console.log(data.getStatus()); // '🥑'
    console.log(data.getStatus.call(this)); // undefined
  }, 0);
}
// eightySecondTask();

// 83. 
function eightyThirdTask() {
  const person = {
    name: 'Lydia',
    age: 21,
  };

  let city = person.city; // undefined
  city = 'Amsterdam';

  console.log(person); // old object 
}
// eightyThirdTask();

// 84. ----------------------------- task about block scope ----------------------------
function eightyFourthTask() {
  function checkAge(age) {
    if (age < 18) {
      const message = "Sorry, you're too young.";
    } else {
      const message = "Yay! You're old enough!";
    }

    return message;
  }

  console.log(checkAge(21)); // error because message in not defined; 
}
// eightyFourthTask();

// 85.----------------------------- task about fetch ----------------------------
function eightyFifthTask() {
  // What kind of information would get logged?
  // fetch('https://www.website.com/api/user/1')
  // .then(res => res.json())
  // .then(res => console.log(res));

  // A: The result of the fetch method.
  // B: The result of the second invocation of the fetch method.
  // C: The result of the callback in the previous .then(). =>>>> this rigth
  // D: It would always be undefined.
}

// 86. 
function eightySixthTask() {
  // Which option is a way to set hasName equal to true, provided you cannot pass true as an argument?
  function getName(name) {
    const hasName = !!name;
  }
  // A: !!name
  // B: name
  // C: new Boolean(name)
  // D: name.length
}

// 87. ----------------------------- task about strings ----------------------------
function eightySevenTask() {
  console.log('I want pizza'[0]); // 'I'
}

// 88. ----------------------------- task about default parameter ----------------------------
function eightyEighthTask() {
  function sum(num1, num2 = num1) {
    console.log(num1 + num2);
  }

  sum(10); // 20 => 10 + 10
}
// eightyEighthTask();

// 89.----------------------------- task about default modules ----------------------------
function eightyNinthTask() {
  // // module.js
  // export default () => 'Hello world';
  // export const name = 'Lydia';

  // // index.js
  // import * as data from './module';

  // console.log(data); // => { default: function default(), name: "Lydia" }
}

// 90.----------------------------- task about typeof result class ----------------------------
function ninetyTask() {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  const member = new Person('John');
  console.log(typeof member); // object
}
// ninetyTask();

// 91. ----------------------------- task about array's methods ----------------------------
function ninetyFirstTask() {
  let newList = [1, 2, 3].push(4);

  console.log(newList.push(5)); // error type
}

// 92. ----------------------------- task about function's prototype ----------------------------
function ninetySecondTask() {
  function giveLydiaPizza() {
    return 'Here is pizza!';
  }

  const giveLydiaChocolate = () =>
    "Here's chocolate... now go hit the gym already.";

  console.log(giveLydiaPizza.prototype); // { constructor: ...}
  console.log(giveLydiaChocolate.prototype); // undefined
}
// ninetySecondTask();

// 93.----------------------------- task about object methods ----------------------------
function ninetyThirdTask() {
  const person = {
    name: 'Lydia',
    age: 21,
  };

  for (const [x, y] of Object.entries(person)) {
    console.log(x, y); // name, 'Lydia' /  age, 21
  }
}
// ninetyThirdTask();

// 94. ----------------------------- task about rest operator ----------------------------
function ninetyFourthTask() {
  // function egtItems(fruitList, ...args, favoriteFruit) {
  //   return [...fruitList, ...args, favoriteFruit]
  // }

  getItems(["banana", "apple"], "pear", "orange"); // SyntaxError
}

// 95. ----------------------------- task about syntax  ----------------------------
function ninetyFifthTask() {
  function nums(a, b) {
    if (a > b) console.log('a is bigger');
    else console.log('b is bigger');
    return
    a + b;
  }

  console.log(nums(4, 2)); // a is bigger, undefined
  console.log(nums(1, 2)); // b is bigger, undefined
}

// 96. ----------------------------- task about class  ----------------------------
function ninetySixthTask() {
  class Person {
    constructor() {
      this.name = 'Lydia';
    }
  }

  Person = class AnotherPerson {
    constructor() {
      this.name = 'Sarah';
    }
  };

  const member = new Person();
  console.log(member.name); // "Sarah"because class Person became class AnotherPerson
}

// 97. ----------------------------- task about object property and Symbol  ----------------------------
function ninetySeventhTask() {
  const info = {
    [Symbol('a')]: 'b',
  };

  console.log(info); // {[Symbol.a]: 'b'}
  console.log(Object.keys(info)); // []
}
// ninetySeventhTask();

// 98.----------------------------- task about object and array  ----------------------------
function ninetyEighthTask() {
  const getList = ([x, ...y]) => [x, y]
  // const getUser = user => { name: user.name, age: user.age } // here should be use ({ ... })

  const list = [1, 2, 3, 4]
  const user = { name: "Lydia", age: 21 }

  console.log(getList(list)) // [1, [2, 3, 4]]
  console.log(getUser(user)) // SyntaxError
}
// ninetyEighthTask();

// 99.----------------------------- task about error  ----------------------------
function ninetyNinthTask() {
  const name = 'Lydia';

  console.log(name()); // error TypeError
}
// ninetyNinthTask();

// 100. ---------------------------- task about backticks  ----------------------------
function hundredTask() {
  const output = `${[] && 'Im'}possible!
  You should${'' && `n't`} see a therapist after so much JavaScript lol`;
  console.log(output); // Impossible! You should see a therapist after so much JavaScript lol
}
// hundredTask();

// 101.---------------------------- task about operator ||  ----------------------------
function task101() {
  const one = false || {} || null; // {} 
  const two = null || false || ''; // ''
  const three = [] || 0 || true; // []

  console.log(one, two, three);
}
// task101();

// 102. ---------------------------- task about promise  ----------------------------
function task102() {
  const myPromise = () => Promise.resolve('I have resolved!');

  function firstFunction() {
    myPromise().then(res => console.log(res + 1));
    console.log('first');
  }

  async function secondFunction() {
    console.log(await myPromise() + 2);
    console.log('second');
  }

  firstFunction();
  secondFunction();

  // second, I have resolved!1, I have resolved!2, second
}
// task102();

// 103.---------------------------- task about set and loop for...of  ----------------------------
function task103() {
  const set = new Set();

  set.add(1);
  set.add('Lydia');
  set.add({ name: 'Lydia' });

  for (let item of set) {
    console.log(item + 2); // 3, Lydia2, '[object Object]2'
  }
}
// task103();

// 104.---------------------------- task about promise  ----------------------------
function task104() {
  console.log(Promise.resolve(5)) // Promise {<fulfilled>: 5}
}
// task104();

// 105.---------------------------- task about references object  ----------------------------
function task105() {
  function compareMembers(person1, person2 = person) {
    if (person1 !== person2) {
      console.log('Not the same!');
    } else {
      console.log('They are the same!');
    }
  }
  const person = { name: 'Lydia' };
  compareMembers(person); // the same
}
// task105();

// 106.---------------------------- task about array  ----------------------------
function task106() {
  const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  };

  const colors = ['pink', 'red', 'blue'];

  // console.log(colorConfig.colors[1]); // error, because [color[1]] => is not error
}
// task106();

// 107.
function task107() {
  console.log('❤️' === '❤️');  // true
}
// task107();

// 108.---------------------------- task about array's methods ----------------------------
function task108() {
  const emojis = ['✨', '🥑', '😍'];

  emojis.map(x => x + '✨'); // not modify
  emojis.filter(x => x !== '🥑'); // not modify
  emojis.find(x => x !== '🥑'); // not modify
  emojis.reduce((acc, cur) => acc + '✨'); // not modify 
  emojis.slice(1, 2, '✨'); // not modify
  emojis.splice(1, 2, '✨'); // modify 
  console.log(emojis); //  ['✨', '✨']
}
// task108();

// 109.
function task109() {
  const food = ['🍕', '🍫', '🥑', '🍔'];
  const info = { favoriteFood: food[0] };

  info.favoriteFood = '🍝';

  console.log(food); // info = {favoriteFood: '🍝'} // food = ['🍕', '🍫', '🥑', '🍔']
}
// task109();

// 110. ---------------------------- task about JSON parse ----------------------------
function task110() {
  // JSON.parse(); // => Parses JSON to a JavaScript value
}

// 111.---------------------------- task about "temporal dead zone". ----------------------------
function task111() {
  let name = 'Lydia';

  function getName() {
    console.log(name);
    let name = 'Sarah';
  }

  getName(); // Error
}
// task111();

// 112.---------------------------- task about function generator ----------------------------
function task112() {
  function* generatorOne() {
    yield ['a', 'b', 'c'];
  }

  function* generatorTwo() {
    yield* ['a', 'b', 'c'];
  }

  const one = generatorOne();
  const two = generatorTwo();

  console.log(one.next().value); // ['a', 'b', 'c']
  console.log(two.next().value); //'a'
}
// task112();

// 113. ---------------------------- task about backtick and function ----------------------------
function task113() {
  console.log(`${(x => x)('I love')} to program`); // => 'I love to program
}
// task113();

// 114. ---------------------------- task about setInterval ----------------------------
function task114() {
  let config = {
    alert: setInterval(() => { // The setInterval callback will still be called every second
      console.log('Alert!');
    }, 1000),
  };

  config = null;
}

// 115. ---------------------------- task about Maps ----------------------------
function task115() {
  const myMap = new Map();
  const myFunc = () => 'greeting';

  myMap.set(myFunc, 'Hello world!');

  //1
  // myMap.get('greeting');
  //2
  myMap.get(myFunc); // => this will be work
  //3
  // myMap.get(() => 'greeting');
}

// 116.---------------------------- task about spreed and copy obj ----------------------------
function task116() {
  const person = {
    name: 'Lydia',
    age: 21,
  };

  const changeAge = (x = { ...person }) => (x.age += 1);
  const changeAgeAndName = (x = { ...person }) => {
    x.age += 1;
    x.name = 'Sarah';
  };

  changeAge(person); // object will be {name: 'Lydia', age: 22}  
  changeAgeAndName();

  console.log(person); // object will be {name: 'Lydia', age: 22}  
}
// task116();

// 117.---------------------------- task about spreed operator ----------------------------
function task117() {
  function sumValues(x, y, z) {
    return x + y + z;
  }
  // Which of the following options will return 6?
  // A: sumValues([...1, 2, 3])
  // B: sumValues([...[1, 2, 3]])
  // C: sumValues(...[1, 2, 3])
  // D: sumValues([1, 2, 3])
  console.log(sumValues(...[1, 2, 3])); // C
}
// task117();

// 118.---------------------------- task about array ----------------------------
function task118() {
  let num = 1;
  const list = ['🥳', '🤠', '🥰', '🤪'];

  console.log(list[(num += 1)]); // '🥰
}
// task118();

// 119. ---------------------------- task about operator .? ----------------------------
function task119() {
  const person = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
      name: 'Mara',
      breed: 'Dutch Tulip Hound',
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };

  console.log(person.pet?.name); // 'Mara'
  console.log(person.pet?.family?.name); // undefined
  console.log(person.getFullName?.()); // Lydia Hallie
  console.log(member.getLastName?.()); // error
}
// task119();

// 120. ---------------------------- task about array's methods and falsy value ----------------------------
function task120() {
  const groceries = ['banana', 'apple', 'peanuts'];

  if (groceries.indexOf('banana')) {
    console.log('We have to buy bananas!');
  } else {
    console.log(`We don't have to buy bananas!`); // this right 
  }
}
// task120();

// 121. ---------------------------- task about getter and setter ----------------------------
function task121() {
  const config = {
    languages: [],
    set language(lang) {
      return this.languages.push(lang);
    },
    // get language() {
    //   return this.languages;
    // }
  };

  console.log(config.language); // undefined because need create getter 
}
// task121();

// 122. ---------------------------- task about getter and setter ----------------------------
function task122() {
  const name = 'Lydia Hallie';
  console.log(!typeof name === 'object'); // false => because first (typeof name => string =>> !string =>>> false) -> ('object' -> true) -->> false === true ->>> false 
  console.log(!typeof name === 'string'); // false 
}
// task122();

// 123.---------------------------- task about functions ----------------------------
function task123() {
  const add = x => y => z => {
    console.log(x, y, z);
    return x + y + z;
  };

  add(4)(5)(6); // 4,5,6
}

// 124. ---------------------------- task about function generator ----------------------------
function task124() {
  async function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield Promise.resolve(i);
    }
  }
  (async () => {
    const gen = range(1, 3);
    for await (const item of gen) {
      console.log(item); // 1 2 3 
    }
  })();
}
// task124();

// 125.---------------------------- task about functions ----------------------------
function task125() {
  const myFunc = ({ x, y, z }) => {
    console.log(x, y, z);
  };
  myFunc(1, 2, 3); // undefined undefined undefined 
}
// task125();

// 126. 
function task126() {
  function getFine(speed, amount) {
    const formattedSpeed = new Intl.NumberFormat('en-US', {
      style: 'unit',
      unit: 'mile-per-hour'
    }).format(speed);

    const formattedAmount = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);

    return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}`;
  }

  console.log(getFine(130, 300)); // The driver drove 130 mph and has to pay $300.00
}

// 127.---------------------------- task about destructuring objects ----------------------------
function task127() {
  const spookyItems = ['👻', '🎃', '🕸'];
  ({ item: spookyItems[3] } = { item: '💀' });

  console.log(spookyItems); // ["👻", "🎃", "🕸", "💀"]
}

// 128. ---------------------------- task about Number's methods isNaN ----------------------------
function task128() {
  const name = 'Lydia Hallie';
  const age = 21;

  console.log(Number.isNaN(name)); // false
  console.log(Number.isNaN(age)); // false

  console.log(isNaN(name)); // true
  console.log(isNaN(age));// false
}
// task128();

// 129. ---------------------------- task about block scope  ----------------------------
function task129() {
  const randomValue = 21;

  function getInfo() {
    console.log(typeof randomValue); // ReferenceError
    const randomValue = 'Lydia Hallie';
  }

  getInfo();
}
// task129();

// 130. ---------------------------- task about promise and try catch  ----------------------------
function task130() {
  const myPromise = Promise.resolve('Woah some cool data');

  (async () => {
    try {
      console.log(await myPromise); // Woah some cool data'
    } catch {
      throw new Error(`Oops didn't work`);
    } finally {
      console.log('Oh finally!'); // Oh finally
    }
  })();
}
// task130();

// 131. --------------------------- task about array's methods  ----------------------------
function task131() {
  const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

  console.log(emojis.flat(1)); // ['🥑', '✨', '✨', ['🍕', '🍕']]
}
// task131();

// 132. --------------------------- task about reference object  ----------------------------
function task132() {
  class Counter {
    constructor() {
      this.count = 0;
    }

    increment() {
      this.count++;
    }
  }

  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();

  const counterTwo = counterOne;
  counterTwo.increment();

  console.log(counterOne.count); // 3
}
// task132();

// 133. --------------------------- task about event loop  ----------------------------
function task133() {
  const myPromise = Promise.resolve(Promise.resolve('Promise'));

  function funcOne() {
    setTimeout(() => console.log('Timeout 1!'), 0);
    myPromise
      .then(res => res)
      .then(res => console.log(`${res} 1!`));
    console.log('Last line 1!');
  }

  async function funcTwo() {
    const res = await myPromise;
    console.log(`${res} 2!`);
    setTimeout(() => console.log('Timeout 2!'), 0);
    console.log('Last line 2!');
  }

  funcOne();
  funcTwo();
  // Last line 1! - Promise2! - Last line 2! - Promise1! - Timeout 1!- Timeout 2!
}
// task133();

// 134.--------------------------- task about modules  ----------------------------
function task134() {
  // How can we invoke sum in sum.js from index.js?

  // // sum.js
  // export default function sum(x) {
  //   return x + x;
  // }

  // // index.js
  // import * as sum from './sum';

  // sum.default(4) - this right answer
}

// 135. --------------------------- task about Proxy  ----------------------------
function task135() {
  const handler = {
    set: () => console.log('Added a new property!'),
    get: () => console.log('Accessed a property!'),
  };

  const person = new Proxy({}, handler);

  person.name = 'Lydia';
  person.name;
  // Added a new property! Accessed a property!
}
// task135();

// 136.--------------------------- task about object descriptors  ----------------------------
function task136() {
  const person = { name: 'Lydia Hallie' };

  Object.seal(person);

  // person.name = "Evan Bacon"  - seal forbidden add and delete property by object
  // console.log(person)
}
// task136();

// 137. --------------------------- task about object descriptors  ----------------------------
function task137() {
  const person = {
    name: 'Lydia Hallie',
    address: {
      street: '100 Main St',
    },
  };

  Object.freeze(person);

  // Which of the following will modify the person object?
  // A: person.name = "Evan Bacon"
  // B: delete person.address
  // C: person.address.street = "101 Main St" ->> right
  // D: person.pet = { name: "Mara" }
}

// 138.--------------------------- task about functions ----------------------------
function task138() {
  const add = x => x + x;

  function myFunc(num = 2, value = add(num)) {
    console.log(num, value);
  }

  myFunc();  // 2, 4
  myFunc(3); // 3, 6
}
// task138();

// 139. ------------------------ task about private variables in classes ----------
function task139() {
  class Counter {
    #number = 10

    increment() {
      this.#number++
    }

    getNum() {
      return this.#number
    }
  }

  const counter = new Counter();
  counter.increment()

  // console.log(counter.#number) // error 
}

// 140.------------------------ task about function generators ----------
function task140() {
  const teams = [
    { name: 'Team 1', members: ['Paul', 'Lisa'] },
    { name: 'Team 2', members: ['Laura', 'Tim'] },
  ];

  function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
      yield members[i];
    }
  }

  function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
      // ✨ SOMETHING IS MISSING HERE ✨ =>>>> yield* getMembers(teams[i].members)
    }
  }

  const obj = getTeams(teams);
  obj.next(); // { value: "Paul", done: false }
  obj.next(); // { value: "Lisa", done: false }
}

// 141..------------------------ task about array reference data ----------
function task141() {
  const person = {
    name: 'Lydia Hallie',
    hobbies: ['coding'],
  };

  function addHobby(hobby, hobbies = person.hobbies) {
    hobbies.push(hobby);
    return hobbies;
  }

  addHobby('running', []); // return [running
  addHobby('dancing'); // return person ['coding', dancing,]
  addHobby('baking', person.hobbies); // [coding', dancing, baking]

  console.log(person.hobbies); // // [coding', dancing, baking]
}
// task141();

// 142. ------------------------ task about class' method super ----------
function task142() {
  class Bird {
    constructor() {
      console.log("I'm a bird. 🦢");
    }
  }

  class Flamingo extends Bird {
    constructor() {
      console.log("I'm pink. 🌸");
      super();
    }
  }

  const pet = new Flamingo(); //  console.log("I'm pink. 🌸"); => console.log("I'm a bird. 🦢");
}
// task142();

// 143.------------------------ task about array and const ----------
function task143() {
  // 143. Which of the options result(s) in an error?
  const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

  /* 1 */ emojis.push('🦌');
  /* 2 */ emojis.splice(0, 2);
  // /* 3 */ emojis = [...emojis, '🥂']; // this error
  /* 4 */ emojis.length = 0;
}

// 144. ------------------------ task about object methods ----------
function task144() {
  const person = {
    name: "Lydia Hallie",
    age: 21,
    *[Symbol.iterator]() { yield* Object.values(this) }
  }

  // [...person] // ["Lydia Hallie", 21] 
  // const res = [...Object.values(person)]
  const res = [...person]
  console.log(res)
}
// task144();

// 145.
function task145() {
  let count = 0;
  const nums = [0, 1, 2, 3];

  nums.forEach(num => {
    if (num) count += 1
  })

  console.log(count) // 3
}
// task145();

// 146.----------------------- task about array ----------------------
function task146() {
  function getFruit(fruits) {
    console.log(fruits?.[1]?.[1])
  }

  getFruit([['🍊', '🍌'], ['🍍']]) //  undefined
  getFruit() // undefined
  getFruit([['🍍'], ['🍊', '🍌']]) // 🍌
}
// task146();

// 147.---------------------- task about this and class ----------------------
function task147() {
  class Calc {
    constructor() {
      this.count = 0
    }

    increase() {
      this.count++
    }
  }

  const calc = new Calc()
  new Calc().increase()

  console.log(calc.count) // 0
}
// task147();

// 148.--------------------- task about object referents---------------------
function task148() {
  const user = {
    email: "e@mail.com",
    password: "12345"
  }

  const updateUser = ({ email, password }) => {
    if (email) {
      Object.assign(user, { email })
    }

    if (password) {
      user.password = password
    }

    return user
  }

  const updatedUser = updateUser({ email: "new@email.com" })

  console.log(updatedUser === user) // true
}
// task148();

// 149.---------------------- task about array methods ----------------------
function task149() {
  const fruit = ['🍌', '🍊', '🍎']

  fruit.slice(0, 1)
  fruit.splice(0, 1)
  fruit.unshift('🍇')

  console.log(fruit) // ['🍇', '🍊', '🍎']
}
// task149();

// 150.---------------------- task about object keys ----------------------
function task150() {
  const animals = {};
  let dog = { emoji: '🐶' }
  let cat = { emoji: '🐈' }

  animals[dog] = { ...dog, name: "Mara" }
  animals[cat] = { ...cat, name: "Sara" }

  console.log(animals[dog]) // { [object Object]: { emoji: '🐈', name: "Sara"} }
}
// task150();

// 151.---------------------- task about arrow function and this ----------------------
function task151() {
  const user = {
    email: "my@email.com",
    updateEmail: email => {
      this.email = email
    }
  }

  user.updateEmail("new@email.com") // this === globalThis
  console.log(user.email) // my@email.com
}
// task151();

// 152. --------------------- task about Promise.all and reject ----------------------
function task152() {
  const promise1 = Promise.resolve('First')
  const promise2 = Promise.resolve('Second')
  const promise3 = Promise.reject('Third')
  const promise4 = Promise.resolve('Fourth')

  const runPromises = async () => {
    const res1 = await Promise.all([promise1, promise2])
    const res2 = await Promise.all([promise3, promise4])
    return [res1, res2]
  }

  runPromises()
    .then(res => console.log(res))
    .catch(err => console.log(err)) // Third
}
// task152();

// 153.--------------------- task about Object.fromEntries----------------------
function task153() {
  const keys = ["name", "age"]
  const values = ["Lydia", 22]

  const method = 'fromEntries';
  const obj = Object[method](keys.map((_, i) => {
    return [keys[i], values[i]]
  })) // { name: "Lydia", age: 22 }
  console.log(obj)
}
// task153();

// 154. 
function task154() {
  const createMember = ({ email, address = {} }) => {
    const validEmail = /.+\@.+\..+/.test(email)
    if (!validEmail) throw new Error("Valid email pls")

    return {
      email,
      address: address ? address : null
    }
  }

  const member = createMember({ email: "my@email.com" })
  console.log(member) // { email: "my@email.com",  address: null}
}
// task154();

// 155. 
function task155() {
  let randomValue = { name: "Lydia" }
  randomValue = 23

  if (!typeof randomValue === "string") {
    console.log("It's not a string!")
  } else {
    console.log("Yay it's a string!")
  } // Yay it's a string!
}
// task155();

