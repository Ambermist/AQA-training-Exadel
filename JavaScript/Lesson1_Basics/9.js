let source = {
    a: 1,
    b: 2, 
    c: 8
}
let target = {
    a: 3,
    b: 4,
}

let newTarget = Object.assign(target, source);
console.log(target);