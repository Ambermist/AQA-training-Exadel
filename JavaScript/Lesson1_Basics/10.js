const deleteNonNumber = (obj) => {
    for (let p in obj){
        if(typeof obj[p] !== 'number'){
            delete obj[p];
            console.log("deleted " + p)
        }
    }
}

let obj = {
    a: 1,
    b: 2,
    c: '321',
    d: null
}

deleteNonNumber(obj);
console.log(obj);