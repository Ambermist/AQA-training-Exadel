function formatDate(date, format) {
    const map = {
        mm: date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1),
        dd: date.getDate() > 9 ? date.getDate() : '0' + date.getDate(),
        yyyy: date.getFullYear()
    }

    return format.replace(/mm|dd|yyyy/gi, matched => map[matched])
}
module.exports = { formatDate };