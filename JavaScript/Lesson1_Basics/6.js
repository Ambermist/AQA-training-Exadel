const getCommon = (arr1, arr2) => {
    let common = [];
    arr1.forEach(value => value !== ' ' && value !== undefined && arr2.includes(value)?
    common.push(value):
    common);
    return common;
}
console.log(getCommon([1,2,undefined, ' ', 3,'h'], [1,2,undefined, ' ', 3,'h', 5]));