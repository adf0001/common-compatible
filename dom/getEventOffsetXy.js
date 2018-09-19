
//return [ event.offsetX, event.offsetY ]
//return null if fail.

module.exports= function( evt ){
	if( evt.offsetX || evt.offsetY || evt.offsetX===0 ){
		return [evt.offsetX, evt.offsetY];
	}
	else{
		var target= evt.target || evt.srcElement;
		
		if(target.getBoundingClientRect){
			var clientXy= target.getBoundingClientRect();
			return [ evt.clientX- clientXy.left, evt.clientY- clientXy.top];
		}
		else return null;
	}
}
