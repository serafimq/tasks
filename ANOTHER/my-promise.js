// константы для состояния promise
const FULFILLED = 'fulfilled'; // успех
const PENDING = 'pending'; // ожидает
const REJECTED = 'rejected'; // ошибка

class MyPromise {
    // конструктор принимает callback-функцию
    constructor(callback) {
        // изначальное состояния у promise => pending
        this.state = PENDING;
        // результат
        this.result = undefined;
        // накапливаем состояния
        this.onFulFilledFn = [];
        this.onRejectedFn = [];

        const resolve = (value) => {
            if (this.state === PENDING) {
                this.state = FULFILLED;
                this.result = value;
                this.onFulFilledFn.forEach(fn => fn(value));
            }
        };

        const reject = (error) => {
            if (this.state === PENDING) {
                this.state = REJECTED;
                this.result = error;
                this.onRejectedFn.forEach(fn => fn(error));
            }
        };

        try {
            callback(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }

    then(onFulFilled, onRejected) {
        return new MyPromise((resolve, reject) => {
            if (this.state === PENDING) {
                if (onFulFilled) {
                    this.onFulFilledFn.push(() => {
                        try {
                            const newResult = onFulFilled(this.result);
                            if (newResult instanceof MyPromise) {
                                newResult.then((resolve, reject))
                            } else {
                                resolve(newResult)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    })
                }
                if (onRejected) {
                    this.onRejectedFn.push(() => {
                        try {
                            const newResult = onRejected(this.result);
                            if (newResult instanceof MyPromise) {
                                newResult.then((resolve, reject))
                            } else {
                                resolve(newResult)
                            }
                        } catch (e) {
                            reject(e)
                        }
                    })
                }
                return;
            }
            if (onFulFilled && this.state === FULFILLED) {
                try {
                    const newResult = onFulFilled(this.result);
                    if (newResult instanceof MyPromise) {
                        newResult.then((resolve, reject))
                    } else {
                        resolve(newResult)
                    }
                } catch (e) {
                    reject(e)
                }
                return;
            }
            if (onRejected && this.state === REJECTED) {
                try {
                    const newResult = onRejected(this.result);
                    if (newResult instanceof MyPromise) {
                        newResult.then((resolve, reject))
                    } else {
                        resolve(newResult)
                    }
                } catch (e) {
                    reject(e)
                }
                return;
            }
        })
    }

    catch(onRejected) {
        return this.then(null, onRejected)
    }
}


const promise = new Promise((resolve, reject) => {

})
