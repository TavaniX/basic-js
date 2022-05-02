const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    const string = String(str)
    const repeat = options['repeatTimes'] || 1
    const separator = options['separator'] || '+'
    const addition = String(options['addition']) || ''
    const additionRepeat = options['additionRepeatTimes'] || 1
    const additionSeparator = options['additionSeparator'] || '|'

    function repeatBasicValues(amount, value, separator) {
        return new Array(amount).fill(value).join(separator)
    }

    basicRepeats = repeatBasicValues(
        additionRepeat,
        addition,
        additionSeparator
    )

    return repeatBasicValues(repeat, `${string}${basicRepeats}`, separator)
}

module.exports = {
    repeater,
}
