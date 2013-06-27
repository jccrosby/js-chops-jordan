(function(){
	
	App = function(){
		this.initialize();
	}
	
	App.prototype = $.extend(App.prototype, {
		
		initialize: function() {
			console.log('App::initialize()');
			
			$.ajax('data/mydata.json', {
				error: function(jqXHR, status, error){
					console.log('ERROR: ', error);
				},
				success: function(data, status, jqXHR){
					console.log('data', data);
				}
			});
				
			
		}
		
	});
	
	return App;
})();