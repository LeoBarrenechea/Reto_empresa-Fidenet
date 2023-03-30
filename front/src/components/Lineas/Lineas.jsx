//npm install --save chart.js react-chartjs-2 --legacy-peer-deps

import { Line } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var opcion1 = [0, 10, 8, 3, 4, 7, 6, -10, 5, 2, 4, 8];
var opcion2 = [7, 3, 0, 4, -2, -9, -4, 3, 0, 7, -8, 1];
var meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

var midata = {
  labels: meses,

  datasets: [
    {
      label: "opcion1",
      data: opcion1,
      tension: 0.5,
      fill: false,
      borderColor: "rgb(255, 192, 44)",
      backgroundColor: "rgba(255, 192, 44,0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(255, 192, 44)",
      pointBackgroundColor: "rgba(255, 192, 44,0.5)",
    },
    {
      label: "opcion2",
      data: opcion2,
      tension: 0.5,
      fill: false,
      borderColor: "rgb(54, 208, 255)",
      backgroundColor: "rgba(54, 208, 255,0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(54, 208, 255)",
      pointBackgroundColor: "rgba(54, 208, 255,0.5)",
    },
  ],
};

var misoptions = {
  scales: {
    y: {
      min: -10,
      max: 10,
      ticks:{
        callback: function(value, index){
            if(value===10){
                return "Positivo"
            } else if (value===0){
                return "Neutro"
            } else if(value===-10){
                return "Negativo"
            }
        }
      }
    },
  },

  plugins: {
    legend: {
      display: true,
    },
  },
};

export default function Lineas() {
  return (
    <div >
      <Line data={midata} options={misoptions} className="container"/>
    </div>
  );
}
