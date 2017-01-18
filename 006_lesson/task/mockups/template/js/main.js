function setMapMarkers (map) {

    var markerGreen = 'images/icons/pin_green.png',
        markerBlue = 'images/icons/pin_cyan.png',
        markers = [
            ['marker-1', 49.981065, 36.2587903, 1],
            ['marker-2', 49.9820000, 36.2668385, 2],
            ['marker-3', 49.9793772, 36.2642504, 3],
        ];

    for (var i = 0; i < markers.length; i += 1) {
        var marker = markers[i];
        var marker = new google.maps.Marker({
            position: {lat: marker[1], lng: marker[2]},
            map: map,
            icon: (i === 0) ? markerBlue : markerGreen,
            title: marker[0],
            zIndex: marker[3]
        });
    }
}

function initMapTooltip (map, position) {
    var infoWindow = new google.maps.InfoWindow({
        content:'<table>' +
            '<tr><th>Company.com</th></tr>' +
            '<tr><td>xyz Street</td></tr>' +
            '<tr><td>London, UK13124</td></tr>' +
        '</table>'
    });

    infoWindow.setPosition(position);
    infoWindow.open(map);

    // Customization tooltip
    google.maps.event.addListener(infoWindow, 'domready', function() {
        var tooltipContent = document.body.querySelector('.gm-style-iw'),
            tooltipContainer = tooltipContent.parentElement,
            tooltipClose = tooltipContent.nextElementSibling,
            
            tooltipWrap = tooltipContent.previousElementSibling,
            tooltipArrow = tooltipWrap.firstElementChild;
            tooltipOuterBorder = tooltipArrow.nextElementSibling;
            tooltipArrowHidden = tooltipOuterBorder.nextElementSibling,
            tooltipBg = tooltipWrap.lastElementChild;


        tooltipContainer.classList.add('google-tooltip');
        tooltipContent.classList.add('tooltip-content');
        tooltipClose.classList.add('tooltip-close');
        tooltipWrap.classList.add('tooltip-wrap');
        tooltipBg.classList.add('tooltip-bg');
        tooltipArrowHidden.classList.add('tooltip-arrow-hidden');
        tooltipArrow.classList.add('tooltip-arrow');
        tooltipOuterBorder.classList.add('tooltip-outer-border');
    });
}

function initMap () {

    var metalist = new google.maps.LatLng(49.981465, 36.2587903);

    var map = new google.maps.Map(document.querySelector('.map'), {
        center: metalist,
        zoom: 16,
        scrollwheel: false
    });

    setMapMarkers(map);
    initMapTooltip(map, metalist);
}

google.maps.event.addDomListener(window, 'load', initMap);