window.addEventListener("load", addMap);

function addMap() {
    var mymap = L.map('mapid').setView([47.104453, 2.410048], 6);
    
  L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  
  //marqueur 
//  var iconZoo = L.icon({
//    iconUrl: '../images/marqueur.png',
//
//    iconSize:     [200, 200], // size of the icon
//    shadowSize:   [50, 64], // size of the shadow
//    iconAnchor:   [42, 85], // point of the icon which will correspond to marker's location
//    shadowAnchor: [4, 62],  // the same for the shadow
//    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//});

//var greenIcon = L.icon({
//    iconUrl: 'leaf-green.png',
//    shadowUrl: 'leaf-shadow.png',
//
//    iconSize:     [38, 95], // size of the icon
//    shadowSize:   [50, 64], // size of the shadow
//    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
//    shadowAnchor: [4, 62],  // the same for the shadow
//    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
//});
//
    var iconBdxPar = L.icon({
        iconUrl: '../images/marqueur.png',
            iconSize: [23, 40],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
    });
    
    var iconGre = L.icon({
        iconUrl: '../images/marqueur-gre.png',
            iconSize: [26, 40],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            shadowSize: [41, 41]
    });
    

  //Bordeaux
  var markerBdx = L.marker([44.837489, -0.578060], {icon: iconBdxPar}).addTo(mymap);
  //var markerBdx = L.marker([44.837489, -0.578060]).addTo(mymap);
  var popupBdx = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<p>Notre dernier zoo !<br />Le beau zoo de Bordeaux !</p>');
    markerBdx.bindPopup(popupBdx).openPopup();
  
  //Grenoble
  var markerGre = L.marker([45.188516, 5.723782], {icon: iconGre}).addTo(mymap).on('click', onClick);
    function onClick() {
      alert("Notre beau zoo !");
    };
  var popupGre = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<p>Notre premier zoo !<br />Le beau zoo de Grenoble !</p>');
    markerGre.bindPopup(popupGre).openPopup();
    
  //Paris
  var markerParis = L.marker([48.855650, 2.351332], {icon: iconBdxPar}).addTo(mymap);
  var popupParis = L.popup({closeOnClick: false, autoClose:false})
    .setContent('<p>Notre plus grand zoo !<br />Le beau zoo de Paris !</p>');
    markerParis.bindPopup(popupParis).openPopup();
    
    
}
