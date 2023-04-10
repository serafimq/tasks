function binarySearch(array, enemy) {
  let arr = [...array];
  let start = 0;
  let end = arr.length;
  let middle;
  let count = 0;
  while (start <= end) {
    count++;
    middle = Math.floor((start + end) / 2);
    if (arr[middle] === enemy) {
      console.log(
        `Искомое число ${enemy}, индекс искомого числа: ${middle}, колличество операций: ${count}`
      );
      return middle;
    }
    if (enemy < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  console.log(`Количество операций: ${count}, искомое число не найдено`);
  return null;
}

module.exports = binarySearch;
