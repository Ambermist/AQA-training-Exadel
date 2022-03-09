console.log('first');
setTimeout(() => {console.log('second')}, 500);
setTimeout(() => {console.log('third')}, 0);
setTimeout(() => {console.log('fourth')});
console.log('fifth');