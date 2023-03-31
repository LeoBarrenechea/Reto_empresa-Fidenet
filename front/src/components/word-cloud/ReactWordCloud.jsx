import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactCloud from "react-wordcloud";
import Athletic from "./Athletic";
import Elon from "./Elon";
import Formula1 from "./Formula";

export default function ReactWordCloud() {
  const param = useParams();
  let data = null;

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
  
    if (param.name === "athletic")
    {
      data = Athletic;
    }
    else if (param.name === "Elon Musk")
    {
      data = Elon;
    }
    else if (param.name === "formula 1")
    {
      data = Formula1;
    }
    console.log(data);


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
          height: "65vh",
          width: "20vw",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <ReactCloud words={data} options={options} />
      </div>
    );
  }

