var fs = require('fs');
var colors = require('colors');


fs.readdir('./test', 'utf-8', function(err, files){
    console.log(files);
    fs.writeFile('./result.txt', files, function(err){
        if (err) throw err;
        console.log('Contend of directory saved as result.txt!'.green);
    });
});