const fsPromises = require('fs').promises;
let data = 'Hey, i\'m newly added';
fsPromises.writeFile('testFilePromise.txt', data)
.then(() => console.log(`File is written succesfully\nand has content:\n${data}`))
.catch((err) => console.log(err));