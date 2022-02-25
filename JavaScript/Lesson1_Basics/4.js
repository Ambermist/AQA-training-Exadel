const compare = (arr1, arr2) => {
    arr1 = flatDeep(arr1, Infinity);
    arr2 = flatDeep(arr2, Infinity);
    return arr1.length === arr2.length && arr1.every(function(value, index) { return value === arr2[index]})
}

function flatDeep(arr, d) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                 : arr.slice();
 };
 console.log(compare([0,1,2,[3,5]], [0,1,2,[[3,4]]]));