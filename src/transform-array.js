const DIS_NEXT = '--discard-next';
const DIS_PREV = '--discard-prev';
const DOUB_NEXT = '--double-next';
const DOUB_PREV = '--double-prev';

function isControlSequence(el) {
    return el === DIS_NEXT || el === DIS_PREV || el === DOUB_NEXT || el === DOUB_PREV;
}

function isNothingToAdd(prev, next) {
    return prev === DIS_NEXT || (next === DIS_PREV && prev !== DOUB_NEXT);
}

function shouldAddSecondEl(prev, next) {
    return (prev === DOUB_NEXT || next === DOUB_PREV) && next !== DIS_PREV;
}

function shouldAddThirdEl(prev, next) {
    return prev === DOUB_NEXT && next === DOUB_PREV;
}

module.exports = function transform(arr) {
    console.log(arr);
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let prev = arr[i - 1];
        let next = arr[i + 1];
        if (!isControlSequence(el) && !isNothingToAdd(prev, next)) {
            newArr.push(el);
            if (shouldAddSecondEl(prev, next)) {
                newArr.push(el);
            }
            if (shouldAddThirdEl(prev, next)) {
                newArr.push(el);
            }
        }
    }
    return newArr;
};