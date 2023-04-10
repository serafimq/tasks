
// Given an input of array,
// which is made of items with >= 3 properties

let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
]

// an exclude array made of key value pair
const excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
]

// my resolve
function excludeItems(items, excludes) {
  const hashExcludes = {};

  excludes.forEach( pair => {
    hashExcludes[pair.v] = pair.k;
  })

  return items.filter(item => {
    let count = 0;

    for (const itemKey in item) {
      if (itemKey === hashExcludes[item[itemKey]]) count++;
    }
    if (count === 0) return item;
  });
}

//it is not mine resolve
function excludeItems(items, excludes) {
  const excludeMap = new Map();
  for (const {k, v} of excludes) {
      if (!excludeMap.has(k)) {
        excludeMap.set(k, new Set());
      }
      excludeMap.get(k).add(v);
  }

  return items.filter(item => {
    return Object.keys(item).every(
      key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  })
}

console.log(excludeItems(items, excludes));