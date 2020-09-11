module.exports = function countCats(backyard) {
    let amountOfCats = 0;
    backyard.forEach(line => line.forEach(el => {
        if (el === '^^') {
            amountOfCats++;
        }
    }));
    return amountOfCats;
};
