const input = [
    ['usd', 'buy', 10000],
    ['usd', 'sell', 5000],
    ['gpb', 'buy', 10000],
    ['eur', 'sell', 10000],
    ['uah', 'buy', 10000],
    ['usd', 'sell', 10000],
];

const currencies = (operations) => {
    const hash = {};

    for (let operationsItem of operations) {

        let [currency, operation, countMoney] = operationsItem;

        if (hash[currency]) {
            if (operation === 'buy') {
                hash[currency] = [hash[currency][0] + countMoney, hash[currency][1]]
            } else {
                hash[currency] = [hash[currency][0], hash[currency][1] + countMoney]
            }
        } else {
            if (operation === 'buy') {
                hash[currency] = [countMoney, 0]
            } else {
                hash[currency] = [0, countMoney]
            }
        }
    }

    return hash
}

const currenciesReduce = (operations) => {
    let result = operations.reduce((acc, cur) => {
        acc[cur[0]] = acc[cur[0]] || [0, 0]; // если такого элемента нет еще, кладем туда [0, 0]
        acc[cur[0]][cur[1] === 'buy' ? 0 : 1] += cur[2]; // в зависимости от buy или не buy прибавляем cur[2] в тот элемент
        return acc;
    }, {});
    return result;
}

console.log(currencies(input));
console.log(currenciesReduce(input));