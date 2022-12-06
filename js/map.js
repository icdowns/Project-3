function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.831409891253344, lng: -87.62728479733805},
    zoom: 10,
  });

 
//your current location 
var youarehereMarker = new google.maps.Marker({
	position: {lat: 41.831409891253344, lng: -87.62728479733805},
	map:map,
  });
	
var text1 = "You are Here (Supposedly), and not at Barracos"

var currentlocation = new google.maps.InfoWindow({
	content: text1,
  });

google.maps.event.addListener (youarehereMarker, 'click', function() {
	currentlocation.open(map, youarehereMarker);
  });

//Barracos
var BarracosMarker = new google.maps.Marker({
	position: {lat: 41.720261, lng: -87.714318},
	map:map,
  });
	
var text2 = "You want to be here, at Barracos, with the Pizza"

var desc1 = new google.maps.InfoWindow({
	content: text2,
  });

google.maps.event.addListener (BarracosMarker, 'click', function() {
	desc1.open(map, BarracosMarker);
  });

//ETHS
var HSMarker = new google.maps.Marker({
	position: {lat: 42.046342, lng: -87.700755},
	map:map,
  });
	
var text3 = "I used to be here, Before IIT"

var desc2 = new google.maps.InfoWindow({
	content: text3,
  });

google.maps.event.addListener (HSMarker, 'click', function() {
	desc2.open(map, HSMarker);
  });

//Starting POI's
var startPoint1 = new google.maps.Circle({
	strokeColor: "#FF0000",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FF0000",
    fillOpacity: 0.2,
    map,
    center: youarehereMarker.getPosition(),
    radius: 175,
});

var startPoint2 = new google.maps.Circle({
	strokeColor: "#FFFF00",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#FFFF00",
    fillOpacity: 0.2,
    map,
    center: BarracosMarker.getPosition(),
    radius: 175,
  });
  
  var startPoint3 = new google.maps.Circle({
	strokeColor: "#0000FF",
    strokeOpacity: 1,
    strokeWeight: 1,
    fillColor: "#0000FF",
    fillOpacity: 0.2,
    map,
    center: youarehereMarker.getPosition(),
    radius: 175,
  });
  
  //How to Get to Pizza
  var fromnowtoBarracos = [
    {lat: 41.831409891253344, lng: -87.62728479733805},
	{lat: 41.720261, lng: -87.714318},
	];
	
  var frompasttoBarracos = [
	{lat: 42.046342, lng: -87.700755},
	{lat: 41.720261, lng: -87.714318},
	];
	
  var iittoBarracos = new google.maps.Polyline({
	path: fromnowtoBarracos,
	geodesic: true,
	strokeColor:"#FF0000",
	strokeOpacity: 1.0,
	strokeWeight: 1.0,
  });
	  
  var ethstoBarracos = new google.maps.Polyline({
	path: frompasttoBarracos,
	geodesic: true,
	strokeColor:"#0000FF",
	strokeOpacity: 1.0,
	strokeWeight: 1.0,
  });
  
  iittoBarracos.setMap(map);
  ethstoBarracos.setMap(map);
  
}

window.initMap = initMap;
