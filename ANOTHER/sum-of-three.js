const arr = [-1, 0, 1, 2, -1, -4];

const threeSum = (num, target = 0) => {
    const result = [];

    if (num.length < 3) {
        return result;
    }

    num.sort((a, b) => a-b);

    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] > target) {
            break;
        }

        if (i > 0 && num[i] === num[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = num.length - 1;

        while (j < k) {
            let sum = num[i] + num[j] + num[k];

            if (sum === target) {
                result.push([num[i], num[j], num[k]])

                while (num[j] === num[j + 1]) j++;
                while (num[k] === num[k - 1]) k--;

                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }

    return result;
}
console.log(threeSum(arr))
// result [[-1, -1, 2], [-1, 0, 1]];