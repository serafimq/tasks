const maze = [
    [1, 1, 1, 0, 0, 1],
    [1, 1, 1, 1, 0, 1],
    [0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 0],
];

const checkPath = (start, end) => {
    // будем заменять те места в которых мы побывали цифрой 5
    maze[start.y][start.x] = 5;

    // функция кот-я ищет свободные клетки вокруг нынешнего плохожения
    let siblings = getValidSib(start)

    // если есть соседние клетки в которых мы еще не были заходим
    if (siblings.length > 0) {
        // проходим циклом по всем возможным клеткам
        for (let i = 0; i < siblings.length; i++) {
            let curr = siblings[i];

            // проверяем на финише мы или нет
            let isSolved = curr.x === end.x && curr.y === end.y;
            // проверяем заходили мы в эту клетку или нет
            let notVisited = maze[curr.y][curr.x] !== 5;

            // проверяем на финише мы или ( посещали эту клеткуу и если нет, то заходим в цикл)
            if (isSolved || (notVisited && checkPath(curr, end) )) {
                return true;
            }
        }
    }

    // false если идти некуда
    return false;
};

const getValidSib = (cord) => {
    // нынешнее положение
    let {x, y} = cord;

    // массив для всех соседних свободных клеток
    let cords = [];

    if (maze[y - 1] !== undefined) { // проверяем клетку сверху, если поле есть
        cords.push({x, y: y - 1, val: maze[y - 1][x]}); // закидываем координаты клетки сверху, и ее значение
    }

    if (maze[y + 1] !== undefined) { // проверяем клетку снизу, если поле есть
        cords.push({x, y: y + 1, val: maze[y + 1][x]}); // закидываем координаты клетки снизу, и ее значение
    }

    if (maze[y][x - 1] !== undefined) { // проверяем клетку слева, если поле есть
        cords.push({x: x - 1, y, val: maze[y][x - 1]}); // закидываем координаты клетки слева, и ее значение
    }

    if (maze[y][x + 1] !== undefined) { // проверяем клетку справа, если поле есть
        cords.push({x: x + 1, y, val: maze[y][x + 1]}); // закидываем координаты клетки справа, и ее значение
    }

    return cords.filter(el => el.val === 0); // оставляем только пустые клетки, на которых мы не были
}

console.log(checkPath({x: 3, y: 0}, {x: 2, y: 5}))
console.log(maze);