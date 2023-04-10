function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let middleIndex = Math.floor(array.length / 2);
  let middle = array[middleIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count++; // вырезать если нужно использовать через импорт
    if (i === middleIndex) continue;
    if (array[i] < middle) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }
  return [...quickSort(less), middle, ...quickSort(greater)];
}

module.exports = quickSort;
