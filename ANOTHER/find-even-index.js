const array = [1, 2, 3, 4, 5, 6];


// сложность On^2
function findEvenIndex(arr) {
  for (let index = 0; index < arr.length; index++) {
    let left = arr.slice(0, index).reduce((acc, el) => acc += el, 0);
    let right = arr.slice(index + 1, arr.length).reduce((acc, el) => acc += el, 0);
    if (left === right) return index;
  }
  return -1;
}

// сложность On
function findEvenIndexGPT(arr) {
  let leftSum = 0;
  let rightSum = arr.reduce((acc, el) => acc += el, 0);

  for (let index = 0; index < arr.length; index++) {
    rightSum -= arr[index];
    if (leftSum === rightSum) return index;
    leftSum += arr[index];
  }

  return -1;
}


console.log(findEvenIndex(array));
