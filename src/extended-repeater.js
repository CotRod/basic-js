module.exports = function repeater(str, options) {
    let featureString = new Array(getAmountOfRepeat(options.repeatTimes));
    let additionString = new Array(getAmountOfRepeat(options.additionRepeatTimes))
    additionString.fill(options.addition !== undefined ? options.addition + '' : '');
    additionString = additionString.join(getSeparator(options.additionSeparator, '|'));
    featureString.fill(str + additionString);

    return featureString.join(getSeparator(options.separator, '+'));
};

function getAmountOfRepeat(repeatField) {
    return repeatField ? repeatField : 1;
}

function getSeparator(separator, defaultSeparator) {
  return separator ? separator : defaultSeparator;
}
  