const flightLength = 150;
const filmsList = [80, 110, 40, 40];

// метод смещением к центру, не самый крутой, сортировать массив приходится
function showTwoFilmAllFlight(time, films) {
    let left = 0;
    let right = films.length - 1;
    const sortFilm = [...films].sort((a,b) => a - b)
    console.log(sortFilm)
    while (left < right) {
        if (sortFilm[left] + sortFilm[right] === time) {
            return true
        }
        if (sortFilm[left] + sortFilm[right] < time) {
            left++
        } else {
            right--
        }
    }
    return false;
}

console.log(showTwoFilmAllFlight(flightLength, filmsList))

function showTwoFilmAllFlight2(time, films) {
    const hash = {};
    for (let i = 0; i < films.length; i++) {
        // в чекер кладём => 150-80=70, 150-110=40, 150-40=110, 150-40=110
        const checker = flightLength - films[i];
        // проверяем есть ли в хэше одно из значений 80, 110, 40, 40
        if (hash.hasOwnProperty(films[i])) {
            // если такое значение есть в хэше, тогда оно даст результат с одним из предыдущих
            return true
        } else {
            // иначе положим его в хэш
            hash[checker] = 1;
        }
    }
    // если ни одного нет, тогда увы и ах
    return false;
}

console.log(showTwoFilmAllFlight2(flightLength, filmsList))
