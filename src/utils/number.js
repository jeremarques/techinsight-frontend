export function formatBigNumbers(number) {
    if (isNaN(number)) {
        throw new Error('Você deve fornecer um número!')
    }

    const numberString = number.toString()
    if (number <= 999) {
        return numberString
    } else if (number <= 999999) {
        if (number === 1000 || number < 1100) {
            return '1 Mil'
        } else if (number <= 9999) {
            return `${numberString[0]},${numberString[1]} Mil`
        } else if (number <= 99999) {
            return `${numberString.slice(0, 2)} Mil`
        } else {
            return `${numberString.slice(0, 3)} Mil`
        }

    } else if (number <= 999999999) {
        if (number === 1000000 || number < 1100000) {
            return '1 M'
        } else if (number <= 9999999) {
            return `${numberString[0]},${numberString[1]} M`
        } else if (number <= 99999999) {
            return `${numberString.slice(0, 2)} M`
        } else {
            return `${numberString.slice(0, 3)} M`
        }
    }
}