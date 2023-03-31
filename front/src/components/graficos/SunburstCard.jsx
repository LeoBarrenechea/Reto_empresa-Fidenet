import './Sunburst.css';
import Sunburst from "../graficos/Sunburst";
import {Paper, Card} from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { MyContext } from '../myContext/MyContext';
import athletic from './athletic';
import elonMusk from './elonMusk';
import formula1 from './formula1';
import { useParams } from 'react-router-dom';

function SunburstCard({SearchInput}) {
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

    console.log(SearchInput);
    if (param.name === "athletic")
    {
      data = athletic;
    }
    else if (param.name === "Elon Musk")
    {
      data = elonMusk;
    }
    else if (param.name === "formula 1")
    {
      data = formula1;
    }
    console.log(data);


  return (
    <div className="sunburstCard">
      <Card style={{ borderRadius: 20 }} elevation={3}>
        <h2 className="sunburstTitle">Hastags relacionados</h2>
        <div className="sunburstDisplay">

        <Sunburst
        data={data}
        scale="linear"
        tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
        tooltip
        tooltipPosition="right"
        keyId="anagraph"
        width="580"
        height="500"
        count_member="size"
        font_size={8}
        labelFunc={node => node.data.name}
      />
        </div>
      </Card>
    </div>
  );
}

export default SunburstCard;