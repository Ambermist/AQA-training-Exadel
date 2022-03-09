const fs = require('fs');
let data = 'Hello world';

fs.writeFile('testFile.txt', data, err => {
    if (err) {
      console.log(err)
      return
    }
    console.log(`File is written succesfully\nand has content:\n${data}`)
})