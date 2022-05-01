const { NotImplementedError } = require('../extensions/index.js')

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
    if (!Array.isArray(arr))
        throw new Error(`'arr' parameter must be an instance of the Array!`)

    let current = arr.slice()

    for (let i = 0; i <= current.length - 1; i++) {
        if (current[i] === '--discard-next') {
            current[i] = 'remove'
            current[i + 1] = 'remove'
        }

        if (current[i] === '--discard-prev') {
            current[i] = 'remove'
            current[i - 1] = 'remove'
        }

        if (current[i] === '--double-next') {
            current[i] = current[i + 1]
        }

        if (current[i] === '--double-prev') {
            current[i] = current[i - 1]
        }
    }

    let result = current.filter((elem) => elem !== 'remove')

    return result
}

module.exports = {
    transform,
}
