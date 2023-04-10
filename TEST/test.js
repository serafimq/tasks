const input = [
  ['usd', 'buy', 10000],
  ['usd', 'sell', 5000],
  ['gpb', 'buy', 10000],
  ['eur', 'sell', 10000],
  ['uah', 'buy', 10000],
  ['usd', 'sell', 10000],
];

const currencies = (operations) => {
  const hash = {};

  function calculate(type, operation, val) {
    if (operation === 'buy') {
      hash[type] = hash[type] + val;
    } else {
      hash[type] = hash[type] - val;
    }
  }

  for (const operation of operations) {
    const [currency, name_operation, value] = operation;

    if (!hash[currency]) {
      hash[currency] = 0;
    }
    calculate(currency, name_operation, value);
  }

  return hash;
};


console.log(currencies(input))
