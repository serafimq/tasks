function maxRot(n) {
   let maxNum = 0;
   let arr = String(n).split('');
    for (let i = 0; i < arr.length - 1 ; i++) {
        arr.push(arr.splice(i, 1)[0]);
        let newArr = Number(arr.join(''))
        console.log(newArr)
        maxNum = Math.max(maxNum, newArr)
    }
    return maxNum;
}


console.log(maxRot(56789 ));
