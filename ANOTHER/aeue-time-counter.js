// чьё то умное решение
function queue1(queuers, pos){
    let wait = 0;

    for(let i = 0; i < queuers.length; i++) {
        if(i <= pos) {
            wait += Math.min(queuers[i], queuers[pos]);
        } else {
            wait += Math.min(queuers[pos]-1, queuers[i]);
        }
    }

    return wait;
}
// или такое

const queue2 = (queuers, pos) => {
    return queuers.reduce((acc, el, i) => acc + Math.min(el, queuers[pos] - Number(i > pos)), 0);
};

// моё решение
function queue(queuers, pos){
    let result = 0;
    const queue = queuers.map((el, index) => {
        if (index === pos) {
            return [el, 0, 'friend']
        }
        return [el, 0];
    });
     while (queue.length) {
        const nextPeople = queue.shift()
         nextPeople[1] += 1;
        if (nextPeople[0] !== nextPeople[1]) {
            queue.push(nextPeople)
        }
         result += 1;
        if (nextPeople[2] && nextPeople[0] === nextPeople[1]) {
            break;
        }
     }
    return result
}

// queue([2, 5, 3, 6, 4], 1);


console.log(queue([2, 5, 3, 6, 4], 2), 12);
console.log(queue([2, 5, 3, 6, 4], 4), 17);
console.log(queue([2, 5, 3, 6, 4], 0), 6);
console.log(queue([2, 5, 3, 6, 4], 3), 20);
//                         0  1  2   3   4   5    6  7  8  19[1] + 18[2] + 18[3] + 18[4] + 17[5]
console.log(queue([48, 4, 5, 210, 8, 431, 88, 9, 5, 10, 79, 750, 1, 949, 8, 10, 39, 59, 10] , 8), 81);

// console.log(queue([2, 5, 3, 6, 4], 1), 18);

