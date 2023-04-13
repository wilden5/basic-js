const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    const transformedArray = [...arr];

    for (let i = 0; i < transformedArray.length; i++) {
        switch (transformedArray[i]) {
            case '--discard-next':
                transformedArray.splice(i, 2);
                break;
            case '--discard-prev':
                    transformedArray.splice(i - 1, 2);
                break;
            case '--double-next':
                    transformedArray[i] = transformedArray[i + 1];
                break;
            case '--double-prev':
                    transformedArray[i] = transformedArray[i - 1];
                break;
            default:
                break;
        }
    }

    return transformedArray;
}

module.exports = {
    transform
};
