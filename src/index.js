export function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function reverseWord(string) {
    let reversedWord = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversedWord += string[i]
    }
    return reversedWord
}

export function calculate(operation, int1, int2) {
    if (operation === "add") {
        return int1 + int2
    }
    if (operation === "subtract") {
        return int1 - int2
    }
    if (operation === "multiply") {
        return int1 * int2
    }
    if (operation === "divide") {
        return int1 / int2
    }
}

export function caesarCipher(string, shiftFactor) {
    let adjustedWord = ""
    let shiftAmount = shiftFactor
    const punctuationArray = [
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/',
        ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'
    ]
    if (shiftAmount > 26) {
        shiftAmount -= 26
    }

    if (shiftAmount === 0) {
        return string
    }

    for (let i = 0; i < string.length; i++) {
        if (string[i] === " " || punctuationArray.includes(string[i])) {
            adjustedWord += string[i]
            continue
        }

        if (string[i] === string[i].toUpperCase()) {
            let currentAscii = string[i].charCodeAt(0)
            let newAscii = (currentAscii + shiftAmount) > 90 ? (currentAscii - 90 + shiftAmount) + 64 : currentAscii + shiftAmount
            adjustedWord += String.fromCharCode(newAscii)
        }
        else {
            let currentAscii = string[i].charCodeAt(0)
            let newAscii = (currentAscii + shiftAmount) > 122 ? (currentAscii - 122 + shiftAmount) + 96 : currentAscii + shiftAmount
            adjustedWord += String.fromCharCode(newAscii)
        }

    }
    return adjustedWord
}

export function analyzeArray(array) {
    let obj = {}
    let average = 0
    let min = Infinity
    let max = -Infinity
    for (let i = 0; i < array.length; i++) {
        average += array[i]
        if (array[i] > max) {
            max = array[i]
        }
        if (array[i] < min) {
            min = array[i]
        }
    }
    obj.average = average / array.length
    obj.min = min
    obj.max = max
    obj.length = array.length
    return obj
}