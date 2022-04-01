console.log("hello node");

var slugify = require('slugify')

const title = slugify('some string lorem ipsum')
const title2 = slugify('some string lorem ipsum', "*") 

console.log(title)
console.log(title2)