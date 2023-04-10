const grid1 = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0']
];

const grid2 = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1']
];

const numIslands = (grid) => {
    if (grid.length === 0) return 0;
    let counter = 0;

    let rowsL = grid.length;
    let colsL = grid[0].length;

    function narkNeighbor(grid, R, C) {
        grid[R][C] = '6';
        if (grid[R][C - 1] === '1') { narkNeighbor(grid, R, C - 1) }
        if (grid[R][C + 1] === '1') { narkNeighbor(grid, R, C + 1) }
        if (grid?.[R - 1]?.[C] === '1') { narkNeighbor(grid, R - 1, C) }
        if (grid?.[R + 1]?.[C] === '1') { narkNeighbor(grid, R + 1, C) }
    }

    for (let R = 0; R < rowsL; R++) {
        for (let C = 0; C < colsL; C++) {
            if (grid[R][C] === '1') {
                counter++;
                narkNeighbor(grid, R, C);
            }
        }
    }


    return counter;
};

console.log(numIslands(grid1));
console.log(numIslands(grid2));

