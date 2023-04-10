// restructuring string

const s1 ='cccaaaввв';

const restructuringStr = (string) => {

    const hash = {};
    let max = 0,
        letter = 0

    for (let i = 0; i < string.length; i++) {
        hash[string[i]] = hash[string[i]] + 1 || 1;
    }

    const arrHash = Object.entries(hash)

    for (let i = 0; i < arrHash.length; i++) {
        if (arrHash[i][1] > max) {
            const [, count] = arrHash[i];
            max = count;
            letter = i
        }
    }

    if (max > (string.length +1)/2) return '';
    const res = Array(string.length);

    let index = 0;
    while (arrHash[letter][1] > 0) {
        res[index] = arrHash[letter][0];
        index += 2;
        arrHash[letter][1] -= 1;
    }

    for (let i = 0; i < arrHash.length; i++) {
        while (arrHash[i][1] > 0) {
            if (index >= res.length) {
                index = 1;
            }
            res[index] = arrHash[i][0];
            index += 2;
            arrHash[i][1] -= 1;
        }
    }

    console.log('res:', res)
}

restructuringStr(s1)
