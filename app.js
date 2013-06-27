(function(){
	
	App = function(){
		this.initialize();
	}
	
	App.prototype = $.extend(App.prototype, {
		
		initialize: function() {
			console.log('App::initialize()');
		}
		
	});
	
	return App;
})();