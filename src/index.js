module.exports = function reverse(n) {
    let a
    if (n < 0) {
        a = n * -1
    } else a = n
    let str = String(a)
    let res = str.split('').reverse().join('')
    return +res
}
