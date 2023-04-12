export default {
  name: "AthleticClubdeBilbao",
  children: [
    {
      name: "Copa del Rey",
      children: [
        { name: "Osasuna", size: 9632 },
        { name: "San Mamés", size: 3611 },
        { name: "Gabarra", size: 6314 },
        { name: "Williams", size: 5614 },
      ],
    },
    {
      name: "Valverde",
      children: [
        { name: "La Liga", size: 5204 },
        { name: "Fichajes", size: 2366 },
        { name: "Continuidad", size: 1231 },
        { name: "Europa", size: 3362 },
        { name: "Luis Enrique", size: 7852 },
      ],
    },
    {
      name: "Temporada",
      children: [
        { name: "Título", size: 4546 },
        { name: "Barcelona", size: 3635 },
        { name: "Supercopa", size: 2312 },
      ],
    },
  ],
};

// ARRAY PARA LOS GRAFICOS DE LINEAS
// var CopaDelRey = [3, 6, -10, 2, -6, 1, 0, -8, -2, 9, 7, -5];
// var Valverde = [-7, -1, 6, -10, 2, 8, 1, -9, 7, 0, -6, 3];
// var Temporada = [-6, -10, -1, -8, -3, 9, 7, 2, 5, 0, 1, -2];