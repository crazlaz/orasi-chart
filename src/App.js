import { useState } from "react";
import "./App.css";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    
    ],
  });





  return (
    <div className="App">
        <h1 className="text-3xl font-bold underline text-orange-500 ">
     Current Week  Workfusion Synthetic Monitors 
    </h1>

      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>

      <h1 className="text-3xl font-bold underline text-orange-500 ">
      Last Week  Synthetic Monitors 
    </h1>
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>

      <h1 className="text-3xl font-bold underline text-orange-500 ">
      Host Health
    </h1>
      <div style={{ width: 700 }}>
        <PieChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
