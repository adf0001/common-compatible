
//addEventListener()
module.exports= function( thisObject, type, listener /*, options*/ ){
	if( thisObject.addEventListener ) return thisObject.addEventListener( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.attachEvent ) return thisObject.attachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else thisObject["on"+type]= listener;
};
