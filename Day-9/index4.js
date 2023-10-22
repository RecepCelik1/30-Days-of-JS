    /* forEach metoduda callback kullanan metotlardan biridir. */

const numbers = [1,2,3,4,5]
const sumArray = (arr) => {
    let sum = 0
    const callback = function(element) {
        sum = sum + element
    }
    arr.forEach(callback)
    return sum

}

console.log(sumArray(numbers))