import React from "react";
import ReactCloud from "react-wordcloud";

import words from "./words";
import Athletic from "./wordsAthletic";
import Elon from "./wordsElon";
import Formula from "./wordsFormula";

export default function ReactWordCloud() {

    const options = {
      colors: [
        "#FFC12F",
        "#FF8100",
        "#D63749",
        "#082188",
        "#36D0FF",
        "#486CFF"        
      ],
      enableTooltip: false,
      deterministic: false,
      fontFamily: 'Poppins',
      fontSizes: [10, 80],
      fontStyle: "normal",
      fontWeight: "normal",
      padding: 0,
      rotations: 2,
      rotationAngles: [0, 90],
      scale: 1,
      spiral: "archimedean",
      transitionDuration: 1000
    };
    return (
      <div
        style={{
          height: "70vh",
          width: "25vw",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <ReactCloud words={words} options={options} />
      </div>
    );
  }

