
var mkdirp = require("mkdirp");
var getDirName = require("path").dirname
var fs = require("fs");

module.exports =  function  (body , imagePath , callback ) {



    var data = body.replace(/^data:image\/\w+;base64,/, "");

    var buf = new Buffer(data, 'base64');

    var filename  = `${imagePath}/${ new Date().toJSON().slice(0,10)}/${Date.now()}.png`;

    var path = MAIN_ROOT_PATH + `/storage/${filename}`;

    mkdirp(getDirName(path), function (err) {
        fs.writeFile(path, buf, 'base64', function(error) {

            if(error) return callback(error , null);
            else return callback(null ,filename);

        });
    })






}