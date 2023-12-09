export const properNumber = inputNumber => {
    return Math.round((inputNumber + Number.EPSILON) * 1000) / 1000;
}
export const constToCssVar = number => {
    if (isNaN(number) || number === 0) {
        return number;
    }
    return properNumber(number * .1) + 'cm';
}
