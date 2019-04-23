
var fs = require('fs');
var path = require('path');

//Like fs.mkdir(path[, mode], callback). Use fs.mkdir() directly when node version is 10 or higher.
//fs.mkdirRecursive(path[, mode], callback)
function mkdirRecursive(dirpath, mode, cb)
{
	if( arguments.length<3 ){
		cb= mode;
		mode= null;
	}
	
	fs.stat(dirpath, function(err, stats){
		if( err ){
			mkdirRecursive(path.dirname(dirpath), mode, function(err){
				if(err) cb(err);
				else{ fs.mkdir( dirpath, mode, cb ); }
			});
		}
		else if( stats.isDirectory() ){ cb( null ); }
		else{ cb( "create directory fail, not a directory, " + dirpath ); }
	});
};

module.exports= mkdirRecursive;

