const fs = require("fs");

const randomInteger = (min, max) =>
  min + Math.round(Math.random() * (max - min));

function createBigSortedArray(n) {
  let arrBigSorted = [];
  for (let i = 0; i < n; i++) {
    arrBigSorted.push(i);
  }
  return arrBigSorted;
}

function createBigUnsortedArray(n) {
  let templateArray = createBigSortedArray(n);
  let arrBigUnsorted = [];
  k = 0;
  do {
    let random = randomInteger(0, n);
    if (templateArray.includes(random)) {
      arrBigUnsorted.push(random);
      templateArray.splice(templateArray.indexOf(random), 1);
    }
  } while (templateArray.length);
  return arrBigUnsorted;
}

// let arrBigUnsorted = createBigUnsortedArray(1835);
// arrBigUnsorted = arrBigUnsorted.join();
// let filePath = "./text.txt";
// fs.writeFileSync(filePath, arrBigUnsorted);
