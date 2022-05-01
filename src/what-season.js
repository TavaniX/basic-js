const { NotImplementedError } = require('../extensions/index.js')

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
    if (date instanceof Date) {
        if (isNaN(date.getMonth()))
            return 'Unable to determine the time of the year'

        if (!(Object.prototype.toString.call(date) === '[Object Date]'))
            return 'Unable to determine the time of the year'

        try {
            switch (date.getMonth()) {
                case 0:
                case 1:
                case 11:
                    return 'winter'
                    break
                case 2:
                case 3:
                case 4:
                    return 'spring'
                    break
                case 5:
                case 6:
                case 7:
                    return 'summer'
                    break
                case 8:
                case 9:
                case 10:
                    return 'autumn'
                    break
                default:
                    throw new Error('Invalid date!')
            }
        } catch (e) {
            throw new Error('Invalid date!')
        }
    } else {
        throw new Error('Invalid date!')
    }
}

module.exports = {
    getSeason,
}
