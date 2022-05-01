const { NotImplementedError } = require('../extensions/index.js')

const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
    if (
        typeof sampleActivity !== 'string' ||
        sampleActivity.length < 0 ||
        sampleActivity === ' '
    )
        return false

    number = Number(sampleActivity)

    if (number < 0 || isNaN(number)) return false

    let carbon = 0.693 / HALF_LIFE_PERIOD
    let caluclated = Math.log(MODERN_ACTIVITY / number) / carbon

    if (caluclated < 0 || caluclated === Infinity) return false

    return Math.ceil(caluclated)
}

module.exports = {
    dateSample,
}
