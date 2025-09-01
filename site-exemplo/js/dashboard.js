// Traffic Chart
const trafficCtx = document.getElementById("trafficChart").getContext("2d");
const trafficChart = new Chart(trafficCtx, {
  type: "line",
  data: {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
    ],
    datasets: [
      {
        label: "Visitas",
        data: [
          120, 190, 300, 500, 200, 300, 420, 350, 500, 600, 750, 650, 700, 900,
          800,
        ],
        backgroundColor: "rgba(52, 152, 219, 0.2)",
        borderColor: "rgba(52, 152, 219, 1)",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// User Distribution Chart
const userDistCtx = document
  .getElementById("userDistributionChart")
  .getContext("2d");
const userDistChart = new Chart(userDistCtx, {
  type: "doughnut",
  data: {
    labels: ["Administradores", "Utilizadores", "Moderadores", "Convidados"],
    datasets: [
      {
        data: [15, 65, 10, 10],
        backgroundColor: [
          "rgba(52, 152, 219, 0.8)",
          "rgba(46, 204, 113, 0.8)",
          "rgba(155, 89, 182, 0.8)",
          "rgba(241, 196, 15, 0.8)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

// Menu item click event
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelector(".menu-item.active").classList.remove("active");
    this.classList.add("active");
  });
});

// Notification click event
document.querySelector(".notification").addEventListener("click", function () {
  alert("Tem 3 notificações não lidas!");
});
