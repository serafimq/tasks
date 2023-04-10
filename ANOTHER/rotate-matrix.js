// Перевернуть матрицу 3х3 против часовой стрелки на 90градусов
// доп: написать еще две функции которые переворачивают на 180 и 270

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const rotateMatrix90 = (matrix) => {
    const rotatedMatrix = [[], [], []];
    let count = 0;
    for (let i = matrix.length -1 ; i >= 0; i--) {
        for (let j = 0; j <= matrix[i].length - 1; j++) {
            rotatedMatrix[count][j] = matrix[j][i];
        }
        count += 1;
    }
    return rotatedMatrix;
}

const rotateMatrix180 = (matrix) => {
    const rotatedMatrix = [[], [], []];
    let countX = 0;
    for (let i = matrix.length -1 ; i >= 0; i--) {
        let countY = 0;
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            rotatedMatrix[countX][countY] = matrix[i][j];
            countY += 1;
        }
        countX += 1;
    }
    return rotatedMatrix;
}

const rotateMatrix270 = (matrix) => {
    const rotatedMatrix = [[], [], []];
    for (let i = 0 ; i <= matrix.length -1; i++) {
        let count = 0;
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            rotatedMatrix[i][count] = matrix[j][i];
            count += 1;
        }
    }
    return rotatedMatrix;
}

// console.log(rotateMatrix90(matrix));
// console.log(rotateMatrix180(matrix));
//console.log(rotateMatrix270(matrix));