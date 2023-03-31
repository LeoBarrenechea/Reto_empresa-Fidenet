export default {
  name: "formula1",
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
            { name: "Win", size: 2423 },
            { name: "Podium", size: 4310 },
            { name: "Championship", size: 5256 },
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
