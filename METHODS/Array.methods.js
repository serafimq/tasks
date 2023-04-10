console.log(['Hello', 'Linkedin', '!'].length); // =>> return 3
console.log(['Hello', 'Linkedin', '!'].push(':)')); // =>> return 4; array === ['Hello', 'Linkedin', '!', ':)']
console.log(['Hello', 'Linkedin', '!'].unshift('(:')); // =>> return 4; array = ['(:', 'Hello', 'Linkedin', '!']
console.log(['Hello', 'Linkedin', '!'].pop()); // =>> return !; array = ['Hello', 'Linkedin']
console.log(['Hello', 'Linkedin', '!'].shift()); // =>> return Hello; array = ['Linkedin', '!']
console.log(['Hello', 'Linkedin', '!'].at(2)); // =>> return !;
console.log(['Hello', 'Linkedin', '!'].indexOf('Linkedin')); // =>> return 1;
console.log(['Hello', 'Linkedin', '!'].includes('Linkedin')); // =>> return true;
console.log(['Hello', 'Linkedin', '!'].map(el => el + '!')); // =>> return [ 'Hello!', 'Linkedin!', '!!' ];
console.log(['Hello', 'Linkedin', '!'].filter(el => el === 'Hello')); // =>> return [ 'Hello' ];
console.log(['Hello', 'Linkedin', '!'].every(el => el.length > 2)); // =>> return false;
console.log(['Hello', 'Linkedin', '!'].some(el => el.length > 2)); // =>> return true;
console.log(['Hello', 'Linkedin', '!'].fill('js')); // =>> return [ 'js', 'js', 'js' ];
console.log(['Hello', 'Linkedin', '!'].reduce((acc, el) => acc +=' ' + el), ''); // =>> return Hello Linkedin !;
console.log(['Hello', 'Linkedin', '!'].concat(['I', 'like', 'JS'])); // =>> return [ 'Hello', 'Linkedin', '!', 'I', 'like', 'JS' ];
console.log(['Hello', 'Linkedin', '!'].join('-')); // =>> return Hello-Linkedin-!;
console.log(['Hello', ['Linkedin', '!']].flat()); // =>> return [ 'Hello', 'Linkedin', '!' ];
console.log(['Hello', 'Linkedin', '!'].find(el => el === '!')); // =>> return '!';
console.log(['Hello', 'Linkedin', '!'].findIndex(el => el === '!')); // =>> return 2;
console.log(['Hello', 'Linkedin', '!'].findIndex(el => el === '!')); // =>> return 2;
console.log([2, 3, 1].sort()); // =>> return [ 1, 2, 3 ];
console.log([2, 3, 1].toString()); // =>> return 2,3,1;
console.log([2, 3, 1].slice(0, 2)); // =>> return [ 2, 3 ];
console.log([2, 3, 1].splice(1, 0, 2, 3)); // =>> return []; arr === [2, 2, 3, 3, 1];
console.log(Array.isArray([2, 3, 1])); // =>> return true;
console.log(Array.from('123')); // =>> return [ '1', '2', '3' ];