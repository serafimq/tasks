const searchArray = (arrayToSearch, query) => {
    if (!arrayToSearch || !query ) {
        throw new Error();
    }
    if (!Array.isArray(arrayToSearch) || !arrayToSearch.every(a => Array.isArray(a) && a.length === 2)) {
        throw new Error();
    }
    if (!Array.isArray(query) || query.length !== 2) {
        throw new Error();
    }

    let indexElem = -1;

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i][0] === query[0] && arrayToSearch[i][1] === query[1]) {
            indexElem = i;
            break;
        }
    }

    return indexElem;
}

const arr = [[3, 2], [5, 2], [1, 2], [1, 2], [1, 2]];
const query = [ 2];

console.log(searchArray(arr, query));
