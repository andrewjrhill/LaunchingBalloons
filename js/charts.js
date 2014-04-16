
//Line chart below is for the 3rd launches altitude data-------------------------------------
$(function () {
    $('#altitude2').highcharts({
        title: {
            text: 'Weather Balloon Mk3 Flight',
            x: -20 //center
        },
        subtitle: {
            text: 'Altitude Summary',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Time (Minutes)'
            },
            categories: ['0', '15', '30', '45', '60', '75', '90',
                '105', '120', '135', '150', '165', '180']
        },
        yAxis: {
            title: {
                text: 'Altitude(ft)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: 'ft'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Balloon Altitude',
            data: [537, 14163, 23659, 31774, 41685, 51453, 62115, 74368, 87534, 100002, 74974, 23011, 54.5]
        }]
    });
});
//Line chart below is for the 3rd launches temp data-------------------------------------
$(function () {
    $('#temp2').highcharts({
        title: {
            text: 'Weather Balloon Mk3 Tempurture Readings',
            x: -20 //center
        },
        subtitle: {
            text: 'Tempurature Summary',
            x: -20
        },
        xAxis: {
            title: {
                text: 'Time (Minutes)'
            },
            categories: ['0', '15', '30', '45', '60', '75', '90',
                '105', '120', '135', '150', '165', '180']
        },
        yAxis: {
            title: {
                text: 'Tempurature °F'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '°F'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{
            name: 'Internal Tempurature',
            data: [50, 52, 41, 41, 29, 22, 18, 18, 21, 24.75, 13, 24, 53]
        },{
            name: 'External Tempurature',
            data: [40, 21, -4.5, -37.6, -62.5, -46.3, -27.9, -18.5, -2.1, -54.9, -10, 40, 63]
        }]
    });
});