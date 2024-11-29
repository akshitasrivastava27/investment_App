let chart; // Variable to hold the Chart.js instance

  // Function to update the chart
  function updateChart(data) {
    const ctx = document.getElementById('datasetChart').getContext('2d');

    // Extract labels and dataset values
    const labels = data.map(row => row.Date);
    const values = data.map(row => row.Close); // Replace 'Close' with the column you want to display

    if (chart) {
      // Update the existing chart
      chart.data.labels = labels;
      chart.data.datasets[0].data = values;
      chart.update();
    } else {
      // Create a new chart
      chart = new Chart(ctx, {
        type: 'line', // Use a line chart
        data: {
          labels: labels,
          datasets: [{
            label: 'Stock Price', // Replace with your desired label
            data: values,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'month' // Adjust to the timeframe (e.g., 'day', 'month', 'year')
              },
              title: {
                display: true,
                text: 'Date'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Price'
              }
            }
          }
        }
      });
    }
  }

  // Function to fetch filtered data and update the chart
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".timeframe-option").forEach(option => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        const timeframe = this.getAttribute("data-timeframe");

        fetch(`/filter-dataset?timeframe=${timeframe}`, {
          method: "GET",
        })
        .then(response => response.json())
        .then(data => {
          console.log("Filtered Data:", data);
          updateChart(data); // Update the chart with the filtered data
        })
        .catch(error => console.error("Error:", error));
      });
    });
  });


function updateDatasetDisplay(data) {
    const displayDiv = document.getElementById("dataset-display");
    displayDiv.innerHTML = ""; // Clear previous content

    data.forEach(row => {
      const rowDiv = document.createElement("div");
      rowDiv.textContent = JSON.stringify(row); // Adjust to format data as needed
      displayDiv.appendChild(rowDiv);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".timeframe-option").forEach(option => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        const timeframe = this.getAttribute("data-timeframe");

        fetch(`/filter-dataset?timeframe=${timeframe}`, {
          method: "GET",
        })
        .then(response => response.json())
        .then(data => {
          console.log("Filtered Data:", data);
          updateDatasetDisplay(data);
        })
        .catch(error => console.error("Error:", error));
      });
    });
  });
