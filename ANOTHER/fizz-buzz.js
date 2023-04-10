const numberOne = 7;
const numberTwo = 15;
const numberThree = 0;

const fizzBuzz = (number) => {
    if (number < 1) {
        return console.log('ERROR');
    }
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzBuzz')
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(numberOne);
fizzBuzz(numberTwo);
// fizzBuzz(numberThree);