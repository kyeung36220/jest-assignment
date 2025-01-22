import { analyzeArray, caesarCipher, calculate, capitalize, reverseWord } from "./index.js"

test ("Capitalizes `zebra`", () => {
    expect(capitalize("zebra")).toBe("Zebra")
})

test ("Reverses `Zebra`", () => {
    expect(reverseWord("Zebra")).toBe("arbeZ")
})

test ("Calculate Adds", () => {
    expect(calculate('add',2,3)).toBe(5)
})

test ("Calculate Subtracts", () => {
    expect(calculate('subtract',2,3)).toBe(-1)
})

test ("Calculate Multiplies", () => {
    expect(calculate('multiply',2,3)).toBe(6)
})

test ("Calculate Divides", () => {
    expect(calculate('divide',12,3)).toBe(4)
})

test ("Caesar Cipher Works for Hamburger shifted 30", () => {
    expect(caesarCipher('Hamburger', 30)).toBe('Leqfyvkiv')
})

test ("Caesar Cipher Works for zZzZz shifted 5", () => {
    expect(caesarCipher('zZzZz', 5)).toBe('eEeEe')
})

test ("Caesar Cipher Works for 'Yo Man What's Up? Today is so ... NICE!' shifted 5", () => {
    expect(caesarCipher(`Yo Man What's Up? Today is so ... NICE!`, 5)).toBe(`Dt Rfs Bmfy'x Zu? Ytifd nx xt ... SNHJ!`)
})

const answerObj = { average: 4, min: 1, max: 8, length: 6 };
test("Analyze Array works for [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual(answerObj)
})
