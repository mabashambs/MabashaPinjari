function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 15.925639632184843, lng: 78.4779383314038};
    //15.925639632184843, 78.4779383314038
    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });
 
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Edurupadu, Kothapalli, Kurnool Dist, AP, India' // Title Location
    });
}