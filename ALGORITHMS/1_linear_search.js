function linearSearch(arr, enemy) {
  let array = [...arr];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count++;
    if (array[i] === enemy) {
      console.log(
        `Искомое число ${enemy}, индекс искомого числа: ${i}, колличество операций: ${count}`
      );
      return i;
    }
  }
  console.log(`Количество операций: ${count}, искомое число не найдено`);
  return null;
}

module.exports = linearSearch;
