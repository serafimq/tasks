// res = {left: [12, 13, 14, 15], right: [12, 13, 14, 15]}

const struct = {
    left: 12,
    right: 12,
    children: [
        {
            left: 13,
            right: 13,
            children: []
        },
        {
            left: 14,
            right: 14,
            children: [{
                left: 15,
                right: 15
            }]
        },
    ]
}

const caclLeftAndRight = (obj, res = {}) => {
    const newObj = res;

    for (const newObjKey in obj) {
        if (Array.isArray(obj[newObjKey])) {
            obj[newObjKey].map(el => {
                return caclLeftAndRight(el, newObj)
            })
        } else {
            newObj[newObjKey] = newObj[newObjKey] || [];
            newObj[newObjKey].push(obj[newObjKey])
        }
    }

    return newObj;
}

console.log(caclLeftAndRight(struct));
