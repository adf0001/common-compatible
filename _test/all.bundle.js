require=(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({"addEventListener":[function(require,module,exports){

//addEventListener()
module.exports= function( thisObject, type, listener /*, options*/ ){
	if( thisObject.addEventListener ) return thisObject.addEventListener.apply( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.attachEvent ) return thisObject.attachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else {
		var onevt="on"+type;
		if( ! thisObject[onevt] ) thisObject[onevt]= listener;	//set listener when empty
	}
};

},{}],"bind":[function(require,module,exports){


//bind()
module.exports= function( func, bindThisObject /*,...*/ ){

	if( func.bind ) return func.bind.apply(func,Array.prototype.slice.call(arguments,1));
	
	//refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
	
	//alert("bind compatible");
	
	if (typeof func !== 'function') {
		throw new Error('bind not-callable object');
	}

	var aArgs   = Array.prototype.slice.call(arguments, 2);
	
	return function() {
		return func.apply(
			(this instanceof Function) ? this : bindThisObject,
			aArgs.concat(Array.prototype.slice.call(arguments))
		);
	};
};


},{}],"removeEventListener":[function(require,module,exports){

//removeEventListener()
module.exports= function( thisObject, type, listener /*, options*/ ){
	if( thisObject.removeEventListener ) return thisObject.removeEventListener.apply( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.detachEvent ) return thisObject.detachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else {
		var onevt="on"+type;
		if( thisObject[onevt]===listener ) thisObject[onevt]= null;	//remove when it's the same listener
	}
};

},{}]},{},[]);
