// Требования
// 1. Наименьшее кол-во банкнот
// 2. Всегда можем выдать клиенту деньги
// 3. Банковский счет бесконечный
// 4. Бесконечное кол-во банкнот
// 5. Банкноты 100. 50. 20. 10

const iWantToGet = (amountRequired) => {
    let count = amountRequired;
    const bills = ['100', '50', '20', '10']
    const result = {
        '100': 0,
        '50': 0,
        '20': 0,
        '10': 0
    };

    for (const bill of bills) {
        while (count >= bill) {
            count -= bill;
            result[bill] += 1;
        }
    }

    return result;
}

console.log(iWantToGet(2660));