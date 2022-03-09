const path = require('path');
const url = require('url');
//const { pathToFileURL } = require('url');
console.log(path.resolve());
console.log( __filename );
const path1 = 'C:\\Users\\pvaronina\\trainings\\AQA-training-Exadel\\JavaScript\\Lesson2_Node';
console.log(url.pathToFileURL(path1).pathname); 