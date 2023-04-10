function selectionSort(array) {
  let arr = [...array];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
      count++;
    }
    let tmp = arr[i];
    arr[i] = arr[indexMin];
    arr[indexMin] = tmp;
  }
  console.log(`Массив отсортирован за ${count} операций`);
  return arr;
}

module.exports = selectionSort;
