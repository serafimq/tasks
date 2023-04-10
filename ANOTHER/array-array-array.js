function explode(x){
    if (typeof x[0] === 'string' && typeof x[1] === 'string') return 'Void!';

    let count =  x.reduce((previousValue, currentValue) =>
        typeof currentValue === 'number' ? previousValue + currentValue : previousValue, 0)

    return Array(count).fill(x)
}

console.log(explode(['a', 'b']));
