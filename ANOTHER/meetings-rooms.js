// Условие задачи:
// Дан массив интервалов времени проведения совещаний,
// intervals, где intervals[i] = [start(i), end(i)].
// Найдите минимальное требуемое количество конференц-залов.
//
// Пример:
// Ввод: intervals = [[0,30],[5,10],[15,20],[50,70],[60,65]]
// Вывод: 2
//
// Ввод: intervals = [[7,10],[2,4]]
// Вывод: 1

// 1 зал: [[0,30],[50,70]]
// 2 зал: [[5,10],[15,20],[60,65]]

// начала:  0     5        15                   50      60
// концы :            10         20       30                  65     70
// если start[i] > end[itr] ? rooms++ : itr++

const howNeedRooms = (meetings) => {
    if (!meetings.length) return 0;

    const starts = [];
    const ends = [];

    for (const meeting of meetings) {
        const [start, end] = meeting;
        starts.push(start);
        ends.push(end);
    }

    starts.sort((a, b) => a - b );
    ends.sort((a, b) => a - b );

    let rooms = 0;
    let endsItr = 0;

    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[endsItr]) {
            rooms += 1;
        } else {
            endsItr += 1;
        }
    }
    return rooms;
}

console.log(howNeedRooms([[0,30],[5,10],[15,20]]));