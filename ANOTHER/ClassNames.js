let ClassNames = [
    'header', 'menu', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link'
]

const sortClassNames = (classes) => {
    const hash = {};
    let result;

    for (let itemClasses of classes) {
        if (hash[itemClasses]) {
            hash[itemClasses] += 1
        } else {
            hash[itemClasses] = 1;
        }

    }

    result = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

    return result;
}

console.log(sortClassNames(ClassNames));