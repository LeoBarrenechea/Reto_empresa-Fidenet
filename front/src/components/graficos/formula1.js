export default {
  name: "Formula1",
  children: [
    {
      name: "GPAustralia",
      children: [
        { name: "Verstappen", size: 3256 },
        { name: "Pole Position", size: 4621 },
        { name: "Motor", size: 3652 },
        {
          name: "Melbourne",
          children: [
            { name: "Albert Park", size: 3652 },
            { name: "Rain", size: 1223 },
          ],
        },
      ],
    },
    {
      name: "Ferrari",
      children: [
        { name: "Sainz", size: 5121 },
        { name: "Leclerc", size: 7423 },
        { name: "Improve", size: 236 },
        { name: "DRS", size: 6314 },
        { name: "MercedesF1", size: 5631 },
      ],
    },
    {
      name: "Fernando Alonso",
      children: [
        {
          name: "Races",
          children: [
            { name: "Win", size: 5423 },
            { name: "Podium", size: 4310 },
            { name: "Championship", size: 2256 },
          ],
        },
        { name: "Aston Martin", size: 3113 },
        { name: "Lewis Hamilton", size: 5413 },
      ],
    },
    {
      name: "Aerodynamics",
      children: [
        { name: "Aileron", size: 1531 },
        { name: "Pontoon", size: 6521 },
        { name: "FIA", size: 2365 },
      ],
    },
  ],
};

// ARRAY PARA LOS GRAFICOS DE LINEAS
// var GPAustralia = [8, -3, -6, 5, -8, -1, 2, 9, 0, -4, 7, -2];
// var Ferrari = [-8, -9, -5, 1, -4, 8, -10, 6, 7, 2, 5, 0];
// var FernandoAlonso = [0, 5, -9, -7, -10, 2, 8, -2, 6, 4, -3, 7];
// var Aerodynamics = [9, -1, -2, -5, -8, -4, -3, 3, -9, 7, -10, 0];
