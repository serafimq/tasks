const input1 = [[1, 4], [3, 5], [6, 8], [7, 8], [8, 13], [14, 40]]; // [1,5], [6, 13], [14, 40];
const input2 = [[1, 4]]; // [1,5], [6, 13], [14, 40];
const input3 = [[7, 8], [1, 4], [3, 5], [6, 8], [8, 13], [14, 40]]; // [1,5], [6, 13], [14, 40];

const fr = (intervals) => {
    if (intervals.length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let interval of intervals) {
        let lastIntervalFromArray = result[result.length - 1];

        if (lastIntervalFromArray[1] >= interval[0]) {
            lastIntervalFromArray[1] = Math.max(lastIntervalFromArray[1], interval[1]);
        } else {
            result.push(interval);
        }
    }

    return result;
}

console.log(fr(input1))
console.log(fr(input2))
console.log(fr(input3))
