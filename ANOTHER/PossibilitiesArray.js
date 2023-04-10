// моё ущербное решение
function isAllPossibilitiesMy(arr){
    if (!arr.includes(0)) return false;
    if (Math.min(...arr) < 0) return false;

    const uniqArr = [... new Set(arr)];

    if (Math.max(...arr) >= uniqArr.length) return false;

    if (arr.length !== uniqArr.length) return false;
    return true;
}
// красивое решение
function isAllPossibilities(x){
    return x.length > 0 ? x.every((a,i) => x.includes(i)) : false;
}

const array = [0,1,2,3,8];
const array2 = [4,1,2,3,8];
const array3 = [0,1,2,2,5];

console.log('1', isAllPossibilitiesMy(array))
console.log('2', isAllPossibilitiesMy(array2))
console.log('3', isAllPossibilitiesMy(array3))
