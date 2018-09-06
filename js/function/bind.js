

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

