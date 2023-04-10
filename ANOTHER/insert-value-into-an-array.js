Array.prototype.insert = function (index, value) {
    if (!this instanceof Array) {
        throw new TypeError('Будь любезен использовать с массивом')
    }

    if (typeof index !== 'number') {
        throw new TypeError('Будь любезен передать число в index')
    }

    if (typeof value !== 'string' && typeof value !== 'number') {
        throw new TypeError('Будь любезен передать строку или число в value')
    }

    if (index > this.length) {
        this.push(value);
    } else {
        this.splice(index, 0, value);
    }
    return this;
}

// Решение с enumerable: false
if (!Array.prototype.insert) {
    Object.defineProperty(Array.prototype, 'insert',
        {
            value: function (index, value) {
                if (index < 0)
                    throw "index must be >= 0";
                if (this == null)
                    return [value];
                else if (index >= this.length)
                    this[this.length] = value;
                else
                    this.splice(index, 0, value);
                return this;
            }
        });
}


// [1,2,3].insert(0,42) => [42,1,2,3]
console.log([1, 2, 3, 4, 6, 7, 8].insert(3, 42))
