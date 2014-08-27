AOS = {};

AOS.map = {
  center: [47.102485, 51.925345],
  locations: [],
  gLatLng: [],
  gMarkers: []
};

$(document).ready(function() {
  var map;

  if (typeof google === "undefined") {
    return;
  }

  google.maps.event.addDomListener(window, 'load', init);

  function init() {
    var mapOptions = {
      center: new google.maps.LatLng(AOS.map.center[0], AOS.map.center[1]),
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
    mapElement = document.getElementById('googlemap'),
    latLngBounds = new google.maps.LatLngBounds();

    map = new google.maps.Map(mapElement, mapOptions);

    AOS.map.locations.forEach(function(l) {
      var coordinates = l.coordinates,
          gLatLng = new google.maps.LatLng(coordinates[0], coordinates[1]);


      latLngBounds.extend(gLatLng);

      AOS.map.gMarkers.push(new google.maps.Marker({map: map, position: gLatLng}));
    });

    map.setCenter(latLngBounds.getCenter());
    map.fitBounds(latLngBounds);
  }

});
