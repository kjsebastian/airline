var flightArray;
var reader = new FileReader();
var fileupload = document.querySelector('#fileupload');

fileupload.addEventListener('change', function(ev) {
    var files = ev.target.files;

    reader.onload = function (e) {
        flightArray = JSON.parse(reader.result);
        drawChart();
    }
    reader.readAsText(files[0])
}, false);

// chart
function drawChart () {
    var labels = [],
    min = [],
    max = [],
    total = [],
    color = "rgba(109,145,23,1)";

    flightArray.forEach(function (flight) {
        labels.push(flight.name);
        min.push(flight.min);
        max.push(flight.max);
        total.push(flight.total);
    });

    var chart_data_min = {
        labels: labels,
        datasets: [
            {
                fillColor: color,
                data:min
            }
        ]
    }

    var chart_data_max = {
        labels: labels,
        datasets: [
            {
                fillColor: color,
                data:max
            }
        ]
    }

    var chart_data_total = {
        labels: labels,
        datasets: [
            {
                fillColor: color,
                data:total
            }
        ]
    }

    // var ctxMin = document.getElementById("flightChartMin").getContext("2d");
    //new Chart(ctxMin).Bar(chart_data_min);

    var ctxMax = document.getElementById("flightChartMax").getContext("2d");
    new Chart(ctxMax).Bar(chart_data_max);

    // var ctxTotal = document.getElementById("flightChartTotal").getContext("2d");
    // new Chart(ctxTotal).Bar(chart_data_total);
}