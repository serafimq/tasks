
// первая говнопопытка
function nextVersion(version){
    const result = version.split('.');
    let lastIndex = result.length-1;

    if (lastIndex === 0) {
        result[0] = String(Number(result[0]) + 1);
    } else {
        lastNumItem(lastIndex, result);
    }

    return result.join('.');
}

function lastNumItem(lastIndex, resultArray) {
    if (lastIndex === 0) {
        return resultArray;
    };
    if (Number(resultArray[lastIndex]) <= 8) {
        resultArray[lastIndex] = String(Number(resultArray[lastIndex]) + 1);
        return resultArray;
    } else {
        resultArray[lastIndex] = '0';
        resultArray[lastIndex-1] =  String(Number(resultArray[lastIndex-1]) + 1);
        lastIndex--;
        lastNumItem(lastIndex, resultArray)
    }
}

// еще одна попыточка

function nextVersion2(version) {
    const result = version.split('.');

    for (let i = result.length - 1; i >= 0; i--) {
        if (i > 0 && result[i] === '9') {
            result[i] = '0'
        } else {
            result[i]++;
            break;
        }
    }

    return result.join('.');
}

console.log(nextVersion2("1.2.3")); // "1.2.4");
console.log(nextVersion2("0.9.9")); // "1.0.0");
console.log(nextVersion2("1")); // "2");
console.log(nextVersion2("1.2.3.4.5.6.7.8")); // "1.2.3.4.5.6.7.9");
console.log(nextVersion2("9.9")); // "10.0");
