// =============================================================================
// Description: Chart Data for Launches Page.
// =============================================================================

//Launch 2: Altitude Data
$(function () {
  $('#altitude1').highcharts({
    title: {
      text: 'Weather Balloon Mk2 Flight',
      x: -20 //center
    },
    credits: {
      enabled: false
    },
    subtitle: {
      text: 'Altitude Summary',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Time (Minutes)'
      },
      categories: ['0', '15', '30', '45', '60', '75', '90','105', '120', '135', '150', '165', '180']
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
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      name: 'Height',
      data: [164, 13502, 28792, 45541, 73477, 52387, 22553, 4073, -325]
    }]
  });
});

//Launch 2: Temprature Data
$(function () {
  $('#temp1').highcharts({
    title: {
      text: 'Weather Balloon Mk2 Tempurture Readings',
      x: -20 //center
    },
    credits: {
      enabled: false
    },
    subtitle: {
      text: 'Internal and External Tempurature Summary',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Time (Minutes)'
      },
      categories: ['0', '15', '30', '45', '60', '75', '90','105', '120', '135', '150', '165', '180']
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
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      name: 'Int. Temp',
      data: [58, 61, 54, 37.4, 23, 19, 11.8, 26, 43]
    },{
      name: 'Ext. Temp',
      data: [48, 38, -1.3, -30.8, -24, -48, -5.9, 45, 61]
    }]
  });
});

//Launch 3: Altitude Data
$(function () {
  $('#altitude2').highcharts({
    title: {
      text: 'Weather Balloon Mk3 Flight',
      x: -20 //center
    },
    credits: {
      enabled: false
    },
    subtitle: {
      text: 'Altitude Summary',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Time (Minutes)'
      },
      categories: ['0', '15', '30', '45', '60', '75', '90','105', '120', '135', '150', '165', '180']
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
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      name: 'Height',
      data: [537, 14163, 23659, 31774, 41685, 51453, 62115, 74368, 87534, 100002, 74974, 23011, 54.5]
    }]
  });
});

//Launch 3: Temprature Data
$(function () {
  $('#temp2').highcharts({
    title: {
      text: 'Weather Balloon Mk3 Tempurture Readings',
      x: -20 //center
    },
    credits: {
      enabled: false
    },
    subtitle: {
      text: 'Internal and External Tempurature Summary',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Time (Minutes)'
      },
      categories: ['0', '15', '30', '45', '60', '75', '90','105', '120', '135', '150', '165', '180']
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
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0
    },
    series: [{
      name: 'Int. Temp',
      data: [50, 52, 41, 41, 29, 22, 18, 18, 21, 24.75, 13, 24, 53]
    },{
      name: 'Ext. Temp',
      data: [40, 21, -4.5, -37.6, -62.5, -46.3, -27.9, -18.5, -2.1, -54.9, -10, 40, 63]
    }]
  });
});