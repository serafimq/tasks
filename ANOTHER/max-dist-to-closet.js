const input1 = [0, 0, 0, 0, 0, 0, 1, 0, 0, 1]; // 2
const input2 = [1, 0, 0, 0]; // 3

const maxDistToCloset = (seats) => {
    let maxDist = 0;
    let count = 0;
    let i = 0;

    if (seats[i] === 0) {
        while (seats[i] === 0) {
            i++;
            count += 1;
        }
        maxDist = count;
        count = 0;
    }

    for ( ; i < seats.length; i++) {
        let current = seats[i];

        if (i === seats.length - 1 && current === 0) {
            count += 1;
            maxDist =  Math.max(maxDist, Math.ceil(count));
            break;
        }

        if (current === 1) {
            count = 0;
        } else {
            count += 1;
            maxDist = Math.max(maxDist, Math.ceil(count/2));
        }
    }
    return maxDist;
};

console.log(maxDistToCloset(input1));
console.log(maxDistToCloset(input2));
