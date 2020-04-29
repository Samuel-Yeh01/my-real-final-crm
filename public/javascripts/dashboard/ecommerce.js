$(function () {
  //---------------------------------
  //- Total Earning Chart
  //---------------------------------

  new Chart(document.getElementById("lineChart1"), {
    type: "line",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"],
      datasets: [
        {
          data: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
          borderColor: "#5d92f4",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              stepSize: 30,
            },
            display: false,
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            display: false,
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });

  //---------------------------------
  //-- New Customer Chart
  //---------------------------------

  new Chart(document.getElementById("lineChart2"), {
    type: "line",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"],
      datasets: [
        {
          data: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
          borderColor: "#00d0bd",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              stepSize: 30,
            },
            display: false,
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            display: false,
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });

  //----------------------
  //- Online Revenue
  //----------------------

  new Chart(document.getElementById("lineChart3"), {
    type: "line",
    data: {
      labels: ["A", "B", "C", "D", "E", "F", "J", "K", "L", "M", "N", "P"],
      datasets: [
        {
          data: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
          borderColor: "#ffb70f",
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
      },
      elements: {
        line: {
          tension: 0.4,
        },
        point: {
          radius: 0,
        },
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              stepSize: 30,
            },
            display: false,
          },
        ],
        xAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            display: false,
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
});
