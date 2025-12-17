const fs = require('fs');
const pdf = require('pdf-extraction');

let dataBuffer = fs.readFileSync('dining_collection.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(function (error) {
    console.error(error);
})
