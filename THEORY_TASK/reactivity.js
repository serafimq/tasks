let runningReaction = null;
const obj = reactive({
    a: 0,
    b: 1,
});

autoRun(() => {
    console.log('поменял obj.a', obj.a);
});
autoRun(() => {
    console.log('поменял obj.b', obj.b);
});

function reactive(object) {
    return Object.entries(object).reduce((acc, [key, value]) => {
        let val = value;
        const deps = new Set();
        Object.defineProperty(acc, key, {
            get() {
                if (runningReaction && !deps.has(runningReaction)) {
                    deps.add(runningReaction)
                }
                return val;
            },
            set(newValue) {
                if (hasChanged(val, newValue)) {
                    val = newValue;
                    deps.forEach(func => func());
                }
            },
            enumerable: true,
        })
        return acc;
    }, {})
}

// проверка для NaN, (NaN === NaN) => false
function hasChanged(newValue, oldValue) {
    return newValue !== oldValue && (newValue === newValue || oldValue === oldValue);
}

function autoRun(func) {
    runningReaction = func;
    func();
    runningReaction = null;
}
