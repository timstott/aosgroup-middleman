Core = {};

Core.map = {
  center: [47.102485, 51.925345],
  locations: [],
  gLatLng: [],
};

$(document).ready(function() {
  if (typeof google === "undefined") {
    return;
  }

  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var map,
      mapOptions = {
      center: new google.maps.LatLng(Core.map.center[0], Core.map.center[1]),
      zoom: 16,
      zoomControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
      },
      scaleControl: false,
      scrollwheel: true,
      panControl: false,
      streetViewControl: false,
      draggable : true,
      overviewMapControl: true,
      overviewMapControlOptions: {
        opened: false,
      },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    },
    mapElement = document.getElementById('googlemap');

    map = new google.maps.Map(mapElement, mapOptions);

    Core.map.locations.forEach(function(l) {
      var coordinates = l.coordinates,
          gLatLng = new google.maps.LatLng(coordinates[0], coordinates[1]);

      l.marker = new google.maps.Marker({map: map, position: gLatLng});
      l.infoWindow = new google.maps.InfoWindow({content: l.info});
    });

    // Centre last location on the map
    google.maps.event.addListenerOnce(map, 'tilesloaded', function(){
      Core.map.locations.forEach(function(l) {
        map.setCenter(l.marker.getPosition());
        l.infoWindow.open(map, l.marker);
      });
    });
  }

});
