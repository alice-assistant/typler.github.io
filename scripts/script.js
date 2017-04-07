$(document).ready(function() {
	var images = ['https://images.unsplash.com/photo-1434648957308-5e6a859697e8?dpr=1&auto=format&fit=crop&w=767&h=575&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1430232324554-8f4aebd06683?dpr=1&auto=format&fit=crop&w=767&h=431&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1479883068921-50cba749450f?dpr=1&auto=format&fit=crop&w=767&h=536&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1467990043612-706c358aa7eb?dpr=1&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1484634749340-ada5df46442b?dpr=1&auto=format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1448201509143-782c98e5d1c6?dpr=1&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=&bg=', 'https://images.unsplash.com/photo-1486579425215-d11603200406?dpr=1&auto=format&fit=crop&w=1500&h=999&q=80&cs=tinysrgb&crop=&bg=' ];
	var image = images[Math.floor(Math.random() * images.length)];

	var img = 'url(' + image +') no-repeat center center fixed';
	$('body').css({
		'background': img,
		'background-size' : 'cover',
	});
	
	function date() {
		
		var time = document.getElementById('time');
		var date = document.getElementById('date');
		
		var chngdate = new Date().toLocaleDateString();
		var chngtime = new Date().toLocaleTimeString('en-GB', { hour12: true,  hour: "numeric", minute: "numeric"});
		time.innerHTML = chngtime;
		date.innerHTML = chngdate;
	}
	
	$('#searchform input').keydown(function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
		var srch = $('.searchinp').val();
		var search = encodeURIComponent(srch);
		window.open('https://www.google.com/?gws_rd=ssl#q=' + search +'', '_blank');
    }
});

	
	
 	function render(wd) {
	var currentLocation = wd.name;
	
	var weatherr = wd.weather[0].description;
	var upperweather = weatherr.charAt(0).toUpperCase();
	var lowerweather = weatherr.substr(1);
	var currentWeather = upperweather + "" + lowerweather;
	
	var icon = wd.weather[0].icon;
	

	
	var currentTemp = Math.round(wd.main.temp) + "°";
	var cloud = wd.clouds.all;
	var currentCloud = cloud + "% clouds";
	var wind = Math.round(wd.wind.speed);
	var currentWind = "Wind speed: " + wind + "m/s";

	
	
	var placee = document.getElementById('place');
	var dege = document.getElementById('deg');
	var winde = document.getElementById('wind');
	var cloude = document.getElementById('cloud');
	var desce = document.getElementById('desc');
	var icone = document.getElementById('icon');
	placee.innerHTML = currentLocation;
	dege.innerHTML = currentTemp;
	winde.innerHTML = currentWind;
	cloude.innerHTML = currentCloud;
	desce.innerHTML = currentWeather;
	var iconsrc = "http://openweathermap.org/img/w/" +  icon + ".png";
	$("#warning").fadeOut();
	$('#icon').html('<img class="icon" src="' + iconsrc + '">');
	$('#icontop').html('<img class="icontop" src="' + iconsrc + '">');
	}

var K = "d1a21bccdabbdd9bf5fad7bc2ec65561";
var cel = false;
function weather(){

  var loc;
  $.getJSON('http://ipinfo.io', function(d){

    loc = d.loc.split(",");

    
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=imperial&lat=' 
              + loc[0] + '&lon=' + loc[1] +'&APPID=' + K, function(apiData){
      wd = apiData;
      
      render(apiData);
    })

  })

}


weather()
	
	$('.navoption').click(function()  {
		$('.changer').removeClass('optionbar');
		$('.changer').addClass('release');
		
	});
	
	$('.fa-times').click(function() {
		$('.changer').addClass('optionbar');
		$('.changer').removeClass('release');
		
	}); 
	
	
	/*var wd;
	
	render(wd) {
		
		
	}
	
	function weather() {
	var lat = '';
	var lon = '';
		var key = '9bc8dc3e135d00e075fd0eb662364e19';
		
	function showlocation() {
   // One-shot position request.
   navigator.geolocation.getCurrentPosition(callback);
	}

	function callback(position) {
   lat = position.coords.latitude;
   lon = position.coords.longitude;
	}
	showlocation();	
		
		
	$.getJSON("https://api.darksky.net/forecast/" + key + "/" + lat +" ," + lon +"?units=us", function(apidata) {
		wd = apidata;
		render(wd);
	});
		

		
	}
	
	weather(); */
	
	
	setInterval(function() {
		date();
	}, 1000);
	date();

});