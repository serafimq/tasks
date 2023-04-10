// Создайте объект Proxy, в котором при обращении по любому ключу obj[‘anyKey’] будет возвращаться этот ключ
const obj = {a: 1, b: 3};
const handler = {
    get(item, property, itemProxy) {
        return Object.keys(item).includes(property) ? property : 'Нет такого ключа в объекте'
    }
}

const proxyObj = new Proxy(obj, handler);

console.log(proxyObj['a']) // a
console.log(proxyObj.c) // нет такого ключа в объекте
