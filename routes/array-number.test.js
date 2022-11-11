const array = require("./array-number")
const getNumberMax = array.getNumberMax
const getNumberMin = array.getNumberMin
const getNumberImpar = array.getNumberImpar
const getNumberParForZero = array.getNumberParForZero
test("Deve retornar o maior numero", () => {
    expect(getNumberMax()).toBe(23)
})
test("Deve retornar o menor numero", () => {
    expect(getNumberMin()).toBe(1)
})
test("Deve retornar o menor numero", () => {
    expect(getNumberImpar()).toEqual([5, 23, 9, 1, 3, 5, 17, 5, 1])
})
test("Deve retornar o menor numero", () => {
    expect(getNumberParForZero()).toEqual([0, 5, 23, 9, 1, 3, 0, 5, 17, 0, 5, 1])
})