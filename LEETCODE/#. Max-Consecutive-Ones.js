// Input: nums = [1,1,0,1,1,1] => 3
// Input: nums = [1,0,1,1,0,1] => 2


const maxConsecutiveOnes = (array) => {
  let count = 0;
  let maxCons = 0;
  for (let i = 0; i < array.length; i++) {
    if (i === 0 && array[i]) count++;
    if (array[i] && array[i - 1]) {
      count++
    } else {
      array[i] ? count = 1 : count = 0;
    }
    maxCons = Math.max(count, maxCons);
  }
  return maxCons;
}

console.log(maxConsecutiveOnes([1,0,1,0,1,1,0,1,1,1]), '==> 3');