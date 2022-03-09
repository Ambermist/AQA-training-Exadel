const fsPromises = require('fs').promises;
async function writeFileContent(file, data){
    try{
    await fsPromises.writeFile(file, data);
    console.log(`File is written succesfully\nand has content:\n${data}`)
    }
    catch(err) {
        console.log(err);
    }
}
writeFileContent('testFilePromise.txt', 'new text');