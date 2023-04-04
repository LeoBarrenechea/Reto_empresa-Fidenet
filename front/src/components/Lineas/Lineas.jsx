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
import { useParams } from "react-router-dom";
import { useEffect } from "react";

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

export default function Lineas() {

const param = useParams();
let data1 = null;
let data2 = null;
let data3 = null;
let label1 = data1;
let label2 = data2;
let label3 = data3;

useEffect(() => {

  let data = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`
    },
    body: JSON.stringify({search: param.name})
  }

  fetch('http://localhost:3001/users/findsearch', data)
    .then(res => res.json())
    .then(data => console.log(data))
}, [])

var CopaDelRey = [3, 6, -10, 2, -6, 1, 0, -8, -2, 9, 7, -5];
var Valverde = [-7, -1, 6, -10, 2, 8, 1, -9, 7, 0, -6, 3];
var Temporada = [-6, -10, -1, -8, -3, 9, 7, 2, 5, 0, 1, -2];

var Twitter = [5, 4, 6, 8, 6, 5, -2, 0, 2, -6, -4, 2];
var SpaceX = [-8, -6, -9, 0, 2, 6, 5, 7, 3, -2, 8, 10];
var Tesla = [3, -2, 1, -4, 0, 3, 7, 10, 5, -4, 0, 6];

var GPAustralia = [8, -3, -6, 5, -8, -1, 2, 9, 0, -4, 7, -2];
var Ferrari = [-8, -9, -5, 1, -4, 8, -10, 6, 7, 2, 5, 0];
var FernandoAlonso = [4, 6, 8, 5, -3, 2, 8, -2, 6, 4, -3, 7];

  if (param.name === "athletic")
  {
    data1 = CopaDelRey;
    data2 = Valverde;
    data3 = Temporada;
    label1 = "CopaDelRey";
    label2 = "Valverde";
    label3 = "Temporada";
  }
  else if (param.name === "Elon Musk")
  {
    data1 = Twitter;
    data2 = SpaceX;
    data3 = Tesla;
    label1 = "Twitter";
    label2 = "SpaceX";
    label3 = "Tesla";
  }
  else if (param.name === "formula 1")
  {
    data1 = GPAustralia;
    data2 = Ferrari;
    data3 = FernandoAlonso;
    label1 = "GPAustralia";
    label2 = "Ferrari";
    label3 = "FernandoAlonso";
  }

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
      pointRadius: 3,
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
      pointRadius: 3,
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
      pointRadius: 3,
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

  return (
    <div >
      <Line data={midata} options={misoptions} className="container"/>
    </div>
  );
}
