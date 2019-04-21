// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#0577B1';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Zion Williamson", "Cam Reddish", "RJ Barrett", "Tre Jones", "Joey Baker", "Marques Bolden", "Alex O'Connell", "Jack White"],
    datasets: [{
      data: [3200, 423, 848, 312, 57.6, 73.8, 77.6, 53.4],
      backgroundColor: ['#012169', '#00539B', '#262626','#FFD960', '#DAD0C6', '#0577B1', '#C84E00', '#993399'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf', '#988675', '#1D6363', '#339898', '#A1B70D', '#FCF7E5'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#0577B1",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
