const arr = [1, [2], [3, [4, [5, [6]]]]];

// my resolve
const flat = (arr, depth = 1) => {
    function flatArr (oldArr, counter) {
        const result = [];
        for (const arrElement of oldArr) {
            if (Array.isArray(arrElement)) {
                result.push(...arrElement);
            } else {
                result.push(arrElement);
            }
        }
        counter--;

        if (counter) {
            return flatArr(result, counter)
        }
        return result;
    }
    return flatArr(arr, depth);
}
// not my resolve
function flat2 (arr, depth = 1) {
    const result = [];
    for (const arrElement of arr) {
        if (Array.isArray(arrElement) && depth > 0) {
            result.push(...flat2(arrElement, depth - 1))
        } else {
            result.push(arrElement);
        }
    }
    return result;
}
// not my resolve from reduce
function flatR (arr, depth = 1) {
    const result = arr.reduce((res, item) => {
        if (Array.isArray(item) && depth > 0) {
            res.push(...flatR(item, depth - 1))
        } else {
            res.push(item);
        }
        return res;
    }, []);
    return result;
}

// stack and shift method
function flatShift(arr, depth = 1) {
    const result = [];
    const stack = [...arr.map(item => ([item, depth]))];

    while (stack.length > 0) {
        const [head, depth] = stack.shift();
        if (Array.isArray(head) && depth > 0) {
            stack.unshift(...head.map(item => ([item, depth - 1])))
        } else {
            result.push(head)
        }
    }
    return result;
}
// stack and shift method
function flatPop(arr, depth = 1) {
    const result = [];
    const stack = [...arr.map(item => ([item, depth]))];

    while (stack.length > 0) {
        const [top, depth] = stack.pop();
        if (Array.isArray(top) && depth > 0) {
            stack.push(...top.map(item => ([item, depth - 1])))
        } else {
            result.push(top)
        }
    }
    return result.reverse();
}

console.log({
    1: flatPop(arr),
    2: flatPop(arr, 1),
    2: flatPop(arr, 2),
    3: flatPop(arr, 3),
})


//1: [1, 2, 3, [4]]
//2: [1, 2, 3, [4]]

// flat(arr, 2)
// [1, 2, 3, 4]