
//addEventListener()
module.exports= function( thisObject, type, listener /*, options*/ ){
	if( thisObject.addEventListener ) return thisObject.addEventListener.apply( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.attachEvent ) return thisObject.attachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else {
		var onevt="on"+type;
		if( ! thisObject[onevt] ) thisObject[onevt]= listener;	//set listener when empty
	}
};
