// Требования
// 1. Наименьшее кол-во банкнот
// 2. Кол-во и купюры передаем в limits
// 3. Если не можем выдать, то не выдаем вообще

let limits = {1000: 5, 500: 2, 100: 5, 50: 100, 30: 6}

const iWantToGet = (amountRequired, limits) => {


    const collect = (amount, bills) => {
        // если сумма которую надо выдать равна нулю вертаем пустой объект
        if (amount === 0) return {};
        // если кол-во номиналов не осталось заканчиваем рекурсию
        if (!bills.length) return;

        let currentBills = bills[0]; // текущий номинал, самый большой
        let availableNotes = limits[currentBills]; // сколько купюр всего таким номиналом
        let notesNeeded = Math.floor(amount / currentBills); // сколько всего нужно купюр (вся сумма деленая на номинал, округляя в меньшуу сторону)
        let numberOfNotes = Math.min(availableNotes, notesNeeded); // сколько можем выдать таких купюр (минимальная из необходимым купюр и тех что есть)

        // запускаем цикл, чтоб обработать варианты, когда крупными нельзя отдать всё
        for (let i = numberOfNotes; i >= 0; i--) { // где i - кол-во купюр, которые можем выдать, и проверяем если выдать меньше на одну, и потом еще на одну ...
            let result = collect(amount - (currentBills * i), bills.slice(1)); // заходим в рекурсию, где передаем , оставшуюся сумму, и массив из номиналов без этого

            console.log(result);
            if (result) { // проверяем что возвращается что-то в result
                return i ? {[currentBills]: i, ...result} : result; // если i есть, то кладем таких купюр i-штук, и разворачиваем остальные купюры
            }

        }
    }
    // получаем массив всех номиналов купюр в банкомате
    const bills = Object.keys(limits)
        .map(Number)
        .sort((a, b) => b - a);

           // рекурсивная функция, кладем сумму и массив всех номиналов купюр в банкомате
    return collect(amountRequired, bills)
}

console.log(iWantToGet(130, limits));