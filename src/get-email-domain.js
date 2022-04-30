const { NotImplementedError } = require('../extensions/index.js')

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
    const position = email.indexOf('@') + 1
    const strLength = email.length
    const restult = email.split('').slice(position, strLength).join('')
    return restult
}

module.exports = {
    getEmailDomain,
}
