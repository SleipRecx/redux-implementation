const compose = (...funcs) => {
    return arg => funcs.reduceRight((composed, fn) => fn(composed), arg)
}

module.exports = compose