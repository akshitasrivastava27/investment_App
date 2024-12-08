function loadDataset(timeframe = "1-year") {
    fetch(`/filter_dataset?timeframe=${timeframe}`)
      .then(response => response.json())
      .then(data => {
        // Parse data into labels and values
        const labels = data.map(item => item.date); // Ensure Date is formatted as string
        const values = data.map(item => item['4. close']); // Replace 'Close' with the column you want to plot
        console.log(labels);
        console.log(values);
        // Update the chart
        updateChart(labels, values);
      })
      .catch(error => console.error("Error fetching data:", error));
  }
  
  // Initialize the Chart.js chart
  const ctx = document.getElementById("datasetChart").getContext("2d");
  let datasetChart = new Chart("datasetChart", {
    type: "line",
    data: {
      labels: [],
      datasets: [{
        label: "Stock Price",
        data: [],
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: "Date" } },
        y: { title: { display: true, text: "Price" } }
      }
    }
  });
  
  // Function to update chart data
  function updateChart(labels, values) {
    datasetChart.data.labels = labels;
    datasetChart.data.datasets[0].data = values;
    datasetChart.update();
  }
  
  // Event listeners for dropdown options
  document.querySelectorAll(".timeframe-option").forEach(option => {
    option.addEventListener("click", event => {
      event.preventDefault();
      const timeframe = event.target.getAttribute("data-timeframe");
      loadDataset(timeframe);
    });
  });
  
  // Load the default dataset
  loadDataset();