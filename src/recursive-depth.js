module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (Array.isArray(arr)) {
            let maxDepth = 1;
            let innerArray = arr.filter(el => Array.isArray(el));
            if (innerArray) {
                for (let i = 0; i < innerArray.length; i++) {
                    let curVal = 1 + this.calculateDepth(innerArray[i]);
                    if (curVal > maxDepth) {
                        maxDepth = curVal;
                    }
                }
            }
            return maxDepth;
        }
        return 0;
    }
};