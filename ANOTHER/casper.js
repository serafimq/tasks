// палиндром
// const palindrome = (str) => {
//     return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
// }

// рекурсия
// const input = [
//     {
//         name: 'category1',
//         input: [{
//             name: 'category2',
//             input: [{
//                 name: 'category3',
//                 input:[{
//
//                 }]
//             }]
//         }]
//     },
//     {
//         name: 'category1',
//         input: [{
//             name: 'category2',
//             input: [{
//                 name: 'category3',
//                 input:[{
//
//                 }]
//             }]
//         }]
//     }
// ]
//
// const recursion = (obj) => {
//     let result = [];
//     for (let i = 0; i < obj.length ; i++) {
//         if (obj[i].name) {
//             result.push(obj[i].name);
//         }
//
//         if (obj[i].input) {
//             result = [...result, ...recursion(obj[i].input)]
//         }
//     }
//
//     return result;
// };
//
// let output = recursion(input);
// console.log(output);

//  output => ['category1','category2','category3']


// async function parse(file) {
//     const promise = await new Promise((resolve, reject) => {
//         const parser = new xml2js.Parser({ explicitArray: false });
//
//         parser.parseString(file, (error, result) => {
//             if (error) reject(error);
//             else resolve(result);
//         });
//     });
//     return promise;
// }

// Do code review
// import xml2js from 'some-open-source-xml2js';
//
//
// function parseXML(xml) {
//     let result;
//     const parcer = new xml2js();
//     parcer.parseString(xml, function (err, data) {
//         if (err) {
//             throw new Error(err);
//         }
//         result = data;
//     });
//
//     return result;
// }

// sortarr
// const input = [5, 4, 1, 6, 3, 8];
//
// const fn = (arr) => {
//     const newarr = [];
//
//     for (let i = 0; i < arr.length ; i++) {
//         if (arr[i] % 2 !== 0) {
//             newarr.push(arr[i]);
//             arr[i] = -1;
//         }
//     }
//     newarr.sort((a,b) => a - b);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === -1) {
//             arr[i] = newarr.shift();
//         }
//     }
//     return arr;
// }
//
// console.log(fn(input));
// const output = [1, 4, 3, 6, 5, 8];

// ёлочка

// let size = 9;
// let space = '         ';
//
// for (let i = 0; i < size; i++) {
//     if (i == 0)
//         console.log(space + 'x ');
//     else {
//         let tree = '';
//         for (let j = 0; j < i + 1; j++) {
//             tree += 'x ';
//         }
//         console.log(space + tree);
//     }
//
//     space = space.substring(0, space.length - 1);
// }
//
// const size = 6;
// const arr = new Array(size).fill(' ');
// let left = size - 1;
// let right = size - 1;
//
// for (let i = 0; i < size; i++) {
//     arr[left] = '*';
//     arr[right] = '*';
//     console.log(arr.join(''));
//     left--;
//     right++;
// }

// const expandedForm = (number) => {
//     let num = String(number).split('.');
//     let leftNums = num[0];
//     let rightNums = num[1];
//
//     let result = '';
//     let resultLeft = '';
//     let resultRight = '';
//
//
//     let count = rightNums.length;
//
//     for (let i = rightNums.length - 1; i >= 0 ; i--) {
//         if ((rightNums[i]) !== '0') {
//             if (!resultRight) {
//                 resultRight = `${rightNums[i]}/1${'0'.repeat(count)}`;
//             } else {
//                 resultRight = `${rightNums[i]}/1${'0'.repeat(count)} + ${resultRight}`
//             }
//         }
//         count--;
//
//
//         if (!resultRight && (rightNums[i]) !== '0') {
//             resultRight = `${rightNums[i]}/1${'0'.repeat(count)}`;
//         } else if ((rightNums[i]) !== '0') {
//             resultRight = `${rightNums[i]}/1${'0'.repeat(count)} + ${resultRight}`
//         }
//         count--;
//     }
//
//     console.log(resultRight);
//     return result;
// }
//
// console.log(expandedForm(12)); // Should return '10 + 2'
// console.log(expandedForm(42)); // Should return '40 + 2'
// console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'


// expandedForm(1.24); // should return '1 + 2/10 + 4/100'
// expandedForm(7.304); // should return '7 + 3/10 + 4/1000'
// expandedForm(0.04); // should return '4/100'
// expandedForm(807.304); // Should return '800 + 7 + 3/10 + 4/1000'
