const { NotImplementedError } = require('../extensions/index.js')

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    for (let i = 0; i < names.length; i++) {
        console.log('idx for x: ', i)
        let counter = 0
        for (let y = i + 1; y < names.length; y++) {
            console.log('idx for y: ', y)
            if (names[i] === names[y]) {
                console.log(
                    `match found at idx for y: ${y} and current value is `,
                    names[y]
                )
                console.log('counter before increase: ', counter)
                counter++
                names[y] = names[y] + `(${counter})`
            }
        }
    }
    return names
}

module.exports = {
    renameFiles,
}
