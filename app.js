(function(){

	App = function(){
		this.initialize();
	}

	App.prototype = $.extend(App.prototype, {

		initialize: function() {
			console.log('App::initialize()');

			// $.ajax('data/mydata.json', {
			// 	error: function(jqXHR, status, error){
			// 		console.log('ERROR: ', error);
			// 	},
			// 	success: function(data, status, jqXHR){
			// 		// console.log('data', data);
			// 		console.log('data', data.subObject.safeWord);

			// 		// console.log('data', data.arrayOfData);




			// 		// for (var i = 0; i < data.arrayOfData.length; i++) {
			// 		// 	var dataObject = data.arrayOfData[i]
			// 		// 	console.log(dataObject.property);
			// 		// };

			// 		// jQuery already has this...
			// 		var arrayOfData = data.arrayOfData;
			// 		var subObject = data.subObject;

			// 		$.each(arrayOfData, function(index, value) {
			// 			console.log('index:', index, 'id:', value.id, 'property:', value.property)
			// 			if (value.id === 3) {
			// 				value.property = "something new";
			// 				console.log('index:', index, 'id:', value.id, 'property:', value.property)
			// 			}
			// 		})

			// 		console.log('the property element of the second item is ' + arrayOfData[1].property);
			// 		console.log('the property element of the second item is ' + arrayOfData['1'].property);
			// 		console.log('the third element of the subObject.likes is ' + subObject['likes'][2]);
			// 		console.log('the third element of the subObject.likes is ' + subObject.likes[2]);
			// 		// This next one doesn't work.
			// 		// console.log('the third element of the subObject.likes is ' + subObject.[3][2]);

			// 	}
			// });

			var self = this;

			$.ajax('http://api.flickr.com/services/feeds/photos_public.gne?format=json#', {
				dataType: 'jsonp',
				jsonpCallback: 'jsonFlickrFeed',
				error: function(jqXHR, status, error){
					console.log('ERROR: ', error);
				},
				success: $.proxy(function(data, status, jqXHR){
					// console.log(data);
					console.log(data.items);

					self.getPhotos(data.items);

				},self )
			});


		},

		getPhotos: function(data) {
			var items = data;
			var self = this;

			// This is fucking with the scope for some fun reason.
			// $.each(items, function(index, value) {
			// 	console.log('index:', index, 'photo:', value.media.m);
			// 	var photo = value.media.m;
			// 	this.showPhotos(photo);
			// })

			for (var i = 0; i < items.length ; i++) {
				console.log(items[i].media.m);
				var photo = items[i].media.m;
				this.showPhotos(photo);
			};
		},

		showPhotos: function(photo) {
			$('.photos').append('<img src=' + photo + '>');
		}

	});

	return App;
})();
