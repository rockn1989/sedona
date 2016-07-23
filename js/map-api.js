function initialize() {
    var myLatlng = new google.maps.LatLng(35.075211, -111.7293511);

    var myOptions = {
        zoom: 7,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(document.querySelector(".map__google-map"), myOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Sedona, USA"
    });

    var infowindow = new google.maps.InfoWindow({
        content: "Sedona, USA"
    });

    google.maps.event.addListener(marker, "click", function() {
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, "zoom_changed", function(){
        map.setCenter( marker.getPosition() );
    });

}


window.onload = function() {
    document.querySelector('.map__google-map').innerHTML = '';
    initialize();
}