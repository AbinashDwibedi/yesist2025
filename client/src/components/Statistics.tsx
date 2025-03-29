
import { Line, Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement } from "chart.js";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement, BarElement);

const Statistics = () => {
  // Data for the Line Chart (Global Temperature Rise)
  const temperatureData = {
    labels: ["1880", "1920", "1960", "2000", "2020"],
    datasets: [
      {
        label: "Temperature Rise (°C)",
        data: [0, 0.2, 0.4, 0.8, 1.1],
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
      },
    ],
  };

  // Data for the Pie Chart (CO2 Emissions by Sector)
  const emissionsData = {
    labels: ["Energy", "Industry", "Transport", "Agriculture"],
    datasets: [
      {
        label: "CO2 Emissions",
        data: [40, 30, 20, 10],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      },
    ],
  };

  // Data for the Bar Chart (Sea Level Rise)
  const seaLevelData = {
    labels: ["1900", "1950", "2000", "2020"],
    datasets: [
      {
        label: "Sea Level Rise (mm)",
        data: [0, 50, 150, 200],
        backgroundColor: "blue",
      },
    ],
  };

  // Data for the Line Chart (Deforestation)
  const deforestationData = {
    labels: ["2000", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Forest Area Lost (Mha)",
        data: [16, 14, 12, 10, 8],
        borderColor: "green",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Climate Change by the Numbers
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Global Temperature Rise Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Global Temperature Rise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={temperatureData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </CardContent>
          </Card>

          {/* CO2 Emissions Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Global CO2 Emissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Pie data={emissionsData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </CardContent>
          </Card>

          {/* Sea Level Rise Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Sea Level Rise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Bar data={seaLevelData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </CardContent>
          </Card>

          {/* Deforestation Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Deforestation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Line data={deforestationData} options={{ responsive: true, plugins: { legend: { display: true } } }} />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;