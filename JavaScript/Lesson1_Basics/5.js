const deleteValues = (arr, values) => {
    values.forEach(value => {
        let total = arr.reduce((total,x) => (x==value ? total+1 : total), 0);
        while(total > 0){
            arr.splice(arr.indexOf(value), 1);
            total--;
        }
        })
        return arr;
}
console.log(deleteValues([1,2,3,4,1,2], [1,2]));