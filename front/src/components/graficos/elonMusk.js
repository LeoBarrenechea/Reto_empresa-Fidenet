export default {
  name: "ElonMusk",
  children: [
    {
      name: "Twitter",
      children: [
        { name: "Price", size: 7865 },
        { name: "Artificial Intelligence", size: 5321 },
        { name: "NeuraLink", size: 2402 },
        { name: "Philanthropist", size: 6487 },
      ],
    },
    {
      name: "SpaceX",
      children: [
        { name: "Reusable Rockets", size: 4851 },
        { name: "Starlink", size: 3625 },
        { name: "Starshield", size: 9523 },
      ],
    },
    {
      name: "Tesla",
      children: [
        { name: "Electric car", size: 5121 },
        { name: "Europa", size: 7423 },
        {
          name: "Model",
          children: [
            { name: "Y", size: 3652 },
            { name: "X", size: 1223 },
            { name: "S", size: 4521 },
            { name: "Monster Truck", size: 952 },

          ],
        },
      ],
    },
  ],
};

// ARRAY PARA LOS GRAFICOS DE LINEAS
// var Twitter = [5, -10, 4, 9, 1, -4, -5, -3, -9, -7, 3, 0];
// var SpaceX = [-8, -6, -9, 0, 2, 6, 5, 7, 4, -4, 8, 10];
// var Tesla = [2, -4, -1, -8, 0, -3, 7, 10, -5, -9, 9, 1];