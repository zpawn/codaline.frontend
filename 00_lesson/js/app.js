$(document).ready(function () {

    var charts = $('.chart');

    if (charts.length) {

        charts.easyPieChart({
            easing: 'easeOutElastic',
            delay: 3000,
            barColor: '#607d8b',
            trackColor: '#f5f5f5',
            scaleColor: false,
            lineWidth: 10,
            trackWidth: 6,
            lineCap: 'butt'
        });
    }
});