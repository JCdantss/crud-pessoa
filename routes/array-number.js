const numbers = [6, 5, 23, 9, 1, 3, 2, 5, 17, 4, 5, 1]
//Desenvolva uma função que retorne o maior número;
const getNumberMax = () => {
    let cont = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > cont) {
            cont = numbers[i]
        }
    }
    return cont
}
// Desenvolva uma função que retorne o menor número;
const getNumberMin = () => {
    let cont = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < cont) {
            cont = numbers[i]
        }
    }
    return cont
}
// Desenvolva uma função que retorne somente os números ímpares;
const getNumberImpar = () => {
    const numberImpar = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 1) {
            numberImpar.push(numbers[i])
        }
    }
    return numberImpar
}
// Desenvolva uma função que substitui todos os números pares por 0;
const getNumberParForZero = () => {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            numbers[i] = 0
        }
    }
    return numbers
}
module.exports = {
    getNumberMax,
    getNumberMin,
    getNumberImpar,
    getNumberParForZero
}