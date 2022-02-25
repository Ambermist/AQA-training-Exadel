const removeDuplicates = (arr) => {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1,2,2,3,3,4,5]));