require=(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({"addEventListener":[function(require,module,exports){

//addEventListener()
module.exports= function( thisObject, type, listener, options ){
	if( thisObject.addEventListener ) return thisObject.addEventListener.apply( thisObject, Array.prototype.slice.call(arguments,1) );
	else if( thisObject.attachEvent ) return thisObject.attachEvent.apply( thisObject, ["on"+type].concat(Array.prototype.slice.call(arguments,2)) );
	else throw Error("neither addEventListener nor attachEvent exists");
};

},{}]},{},[]);
