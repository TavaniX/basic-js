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
    // return result = email.split('').slice(email.indexOf('@') + 1, email.length).join('')
    return email.match(/(?<=@)[a-z\d.-]+$/i).join``
}

module.exports = {
    getEmailDomain,
}
