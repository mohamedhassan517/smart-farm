document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('sensorChart').getContext('2d');
  
    // Sample historical data
    const historicalData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Soil Moisture',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: false
      }, {
        label: 'Temperature',
        data: [28, 25, 30, 35, 32, 30, 29],
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: false
      }, {
        label: 'Nutrient Availability',
        data: [10, 20, 15, 18, 25, 22, 30],
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: false
      }, {
        label: 'pH Level',
        data: [6.5, 7, 6.8, 6.6, 6.9, 7.2, 7.1],
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        fill: false
      }]
    };
  
    // Create a line chart
    const sensorChart = new Chart(ctx, {
      type: 'line',
      data: historicalData,
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Historical Sensor Data'
        },
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Month'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    });
  });
  