
//removeEventListener()
module.exports= function( thisObject, type, listener /*, options*/ ){
	if( thisObject.removeEventListener ) return thisObject.removeEventListener.apply( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.detachEvent ) return thisObject.detachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else {
		var onevt="on"+type;
		if( thisObject[onevt]===listener ) thisObject[onevt]= null;	//remove when it's the same listener
	}
};
