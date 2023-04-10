/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {

  const dictionary = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M',
  }
  const arr = num.toString().split('');
  let lengthNum = arr.length - 1;
  let result = '';
  for (const iterator of arr) {
    let number = +(iterator.toString() + '0'.repeat(lengthNum));
    console.log(number, number > 1000)
    if (number > 1000) {
      result += dictionary[1000].repeat(iterator);
    } else if (dictionary[number]) {
      result += dictionary[number];
    } else {
      result += dictionary[number];
    }
    lengthNum -= 1;
  }
  return result;
};

let num = 3354;

console.log(intToRoman(num, '>> "M CM XC IV"')) // 

