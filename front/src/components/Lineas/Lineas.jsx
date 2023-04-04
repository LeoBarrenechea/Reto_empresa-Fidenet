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

var Entrenador = [0, 10, 8, 3, 4, 7, 6, -10, 5, 2, 4, 8];
var opcion2 = [7, 3, 0, 4, -2, -9, -4, 3, 0, 7, -8, 1];
var opcion3 = [-4, -3, -5, 2, -7, 6, 9, -1, 0, -7, 1, -9];

var CopaDelRey = [3, 6, -10, 2, -6, 1, 0, -8, -2, 9, 7, -5];
var Valverde = [-7, -1, 6, -10, 2, 8, 1, -9, 7, 0, -6, 3];
var Temporada = [-6, -10, -1, -8, -3, 9, 7, 2, 5, 0, 1, -2];

var Twitter = [5, -10, 4, 9, 1, -4, -5, -3, -9, -7, 3, 0];
var SpaceX = [-8, -6, -9, 0, 2, 6, 5, 7, 4, -4, 8, 10];
var Tesla = [2, -4, -1, -8, 0, -3, 7, 10, -5, -9, 9, 1];

var GPAustralia = [8, -3, -6, 5, -8, -1, 2, 9, 0, -4, 7, -2];
var Ferrari = [-8, -9, -5, 1, -4, 8, -10, 6, 7, 2, 5, 0];
var FernandoAlonso = [0, 5, -9, -7, -10, 2, 8, -2, 6, 4, -3, 7];


// const label1 ="CopaDelRey"
// const data1 = CopaDelRey
// const label2 ="Valverde"
// const data2 = Valverde
// const label3 ="Temporada"
// const data3 = Temporada

const label1 ="Twitter"
const data1 = Twitter
const label2 ="SpaceX"
const data2 = SpaceX
const label3 ="Tesla"
const data3 = Tesla

// const label1 ="GPAustralia"
// const data1 = GPAustralia
// const label2 ="Ferrari"
// const data2 = Ferrari
// const label3 ="FernandoAlonso"
// const data3 = FernandoAlonso

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
      label: label1,
      data: data1,
      tension: 0.5,
      fill: false,
      borderColor: "rgb(255, 192, 44)",
      backgroundColor: "rgba(255, 192, 44,0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(255, 192, 44)",
      pointBackgroundColor: "rgba(255, 192, 44,0.5)",
    },
    {
      label: label2,
      data: data2,
      tension: 0.5,
      fill: false,
      borderColor: "rgb(54, 208, 255)",
      backgroundColor: "rgba(54, 208, 255,0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(54, 208, 255)",
      pointBackgroundColor: "rgba(54, 208, 255,0.5)",
    },
    {
      label: label3,
      data: data3,
      tension: 0.5,
      fill: false,
      borderColor: "rgb(72, 108, 255)",
      backgroundColor: "rgba(72, 108, 255,0.5)",
      pointRadius: 5,
      pointBorderColor: "rgb(72, 108, 255)",
      pointBackgroundColor: "rgba(72, 108, 255,0.5)",
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
