function bubbleSort(array) {
  let arr = [...array];
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i + 1] < arr[i]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
      }
      count++;
    }
  }
  console.log(`Массив отсортирован за ${count} операций`);
  return arr;
}

module.exports = bubbleSort;
