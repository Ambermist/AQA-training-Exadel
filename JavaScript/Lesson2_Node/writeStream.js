const fs = require('fs');
let promise = new Promise((resolve, reject) => {
    fs.appendFile('writeStream.txt', 'first line.', function (err) {
        if (err) throw err;
      });
      fs.appendFile('writeStream.txt', 'second line.', function (err) {
        if (err) throw err;
      });
    resolve('finished writing lines')});
    promise.then(result => console.log(result));
