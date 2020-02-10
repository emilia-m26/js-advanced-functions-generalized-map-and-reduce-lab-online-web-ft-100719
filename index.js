// Add your functions here
function map(array, func) {
    let newArray = []
    array.forEach(element => { newArray.push(func(element)) })
    return newArray
}

function reduce(array, func, startValue) {
    let returnValue = startValue ? startValue : array[0]
    let i = startValue ? 0 : 1
    for (; i < array.length; i++) {
        returnValue = func(array[i], returnValue)
    }
    return returnValue
}