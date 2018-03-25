var map;
function initMap(){
    var location = {
        lat: 53.5720125,
        lng:10.0653423
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });

    var pin = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: location,
        map: map,
    });



}