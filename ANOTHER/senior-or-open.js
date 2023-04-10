// Крокетный клуб  Western Suburbs имеет две категории членства - Senior и Open.
// Они хотели бы получить вашу помощь в составлении анкеты,
// которая позволит потенциальным членам клуба определить,
// к какой категории они будут отнесены.
//
// Чтобы стать Senior, член клуба должен быть не моложе 55 лет и иметь гандикап более 7.
// В этом крокетном клубе гандикапы варьируются от -2 до +26; чем лучше игрок, тем ниже гандикап.
//
// Пример:
// Input: [[45, 12],[55,21],[19, -2],[104, 20]]
// Output: ['Open', 'Senior', 'Open', 'Senior']
//
// Input: [[3, 12],[55,1],[91, -2],[53, 23]]
// Output: ['Open', 'Open', 'Open', 'Open']


const SeniorOpen = (arr, seniorAge, seniorHandicap) => {
    const result = [];

    for (const [age, handicap] of arr) {
        if (age >= seniorAge && handicap > seniorHandicap) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }

    return result;
}

console.log(SeniorOpen([[45, 12],[55,21],[19, -2],[104, 20]], 55, 7));