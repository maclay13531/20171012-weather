console.log("check");
alert("PLEASE DO NOT SHARE THE API KEY");
$(document).ready(function(){
	$('.search-zip').submit(function(event){
		console.log("user submitted");
		event.preventDefault();
		var zipCode = $('#zip').val();
		var url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;

		$.getJSON(url, function(data){
			console.log(data);
			var name = data.name;
			var lon = data.coord.lon;
			var lat = data.coord.lat;
			var temp = {
				current: data.main.temtp,
				max: data.main.temp_max,
				min: data.main.temp_min,
			}
			var wind = {
				speed: data.wind.speed,
				direction: data.wind.deg,
			}
			$('.city-name-r').text(name);
			$('.coor-lon-r').text(lon);
			$('.coor-lat-r').text(lat);
			$('.temp-curr-r').text(temp.current);
			$('.temp-max-r').text(temp.max);
			$('.temp-min-r').text(temp.min);
			$('.wind-speed-r').text(wind.speed);
			$('.wind-direction-r').text(wind.direction);
		})
	})
	$('.search-name').submit(function(event){
		console.log("user submitted");
		event.preventDefault();
		var cityName = $('#name').val();
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=e8e54db34d0507b93196869e892e7ae6`;

		$.getJSON(url, function(data){
			var name = data.name;
			var lon = data.coord.lon;
			var lat = data.coord.lat;
			var temp = {
				current: data.main.temp,
				max: data.main.temp_max,
				min: data.main.temp_min,
			}
			var wind = {
				speed: data.wind.speed,
				direction: data.wind.deg,
			}
			$('.city-name-r').text(name);
			$('.coor-lon-r').text(lon);
			$('.coor-lat-r').text(lat);
			$('.temp-curr-r').text(temp.current);
			$('.temp-max-r').text(temp.max);
			$('.temp-min-r').text(temp.min);
			$('.wind-speed-r').text(wind.speed);
			$('.wind-direction-r').text(wind.direction);
		})
	})
})