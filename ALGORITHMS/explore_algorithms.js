const linearSearch = require("./1_linear_search");
const binarySearch = require("./2_binary_search");
const selectionSort = require("./3_selection_sort");
const bubbleSort = require("./4_bubble_sort");
const { arrUnsorted, arrSorted } = require("./HELPERS/arrays");

console.clear();
console.log("<<======= Линейный поиск =======>>");
console.log("Линейный поиск имеет сложность O(n)");
console.log("Эффективен при поиске в не отсортированых массивах");
console.log("Длина не отсортированного массива =", arrUnsorted.length);
linearSearch(arrUnsorted, 44);
console.log("<<======= Бинарный поиск =======>>");
console.log("Длина отсортированного массива =", arrSorted.length);
console.log("Бинарный поиск имеет сложность O(log2N).");
console.log("Эффективен при поиске в отсортированых массивах");
binarySearch(arrSorted, 44);
console.log("<<======= Сортировка выбором =======>>");
console.log("Сортировка выбором имеет сложность O(n^2)");
console.log("Длина не отсортированного массива =", arrUnsorted.length);
selectionSort(arrUnsorted);
console.log("<<======= Пузырьковая сортировка =======>>");
console.log("Пузырьковая сортировка имеет сложность O(n^2)");
console.log("Длина не отсортированного массива =", arrUnsorted.length);
bubbleSort(arrUnsorted);
console.log("<<======= Быстрая сортировка =======>>");
console.log("Быстрая сортировка имеет сложность O(log2n*n)");
console.log("Длина не отсортированного массива =", arrUnsorted.length);
function wrapperQuickSort(arrUnsorted) {
  let count = 0; //функция рекурсивная, поэтому используем замыкание
  let array = [...arrUnsorted];
  function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
    let middleIndex = Math.floor(array.length / 2);
    let middle = array[middleIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
      count++;
      if (i === middleIndex) continue;
      if (array[i] < middle) {
        less.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
    return [...quickSort(less), middle, ...quickSort(greater)];
  }
  quickSort(arrUnsorted);
  console.log(`Массив отсортирован за ${count} операций`);
}
wrapperQuickSort(arrUnsorted);
