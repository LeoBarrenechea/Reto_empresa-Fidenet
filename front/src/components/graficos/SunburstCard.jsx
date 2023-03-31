import './Sunburst.css';
import Sunburst from "../graficos/Sunburst";
import {Paper, Card} from '@material-ui/core';
import { useContext, useEffect } from 'react';
import { MyContext } from '../myContext/MyContext';
import athletic from '../../array/athletic';
import elonMusk from '../../array/elonMusk';
import formula1 from '../../array/formula1';

function SunburstCard({SearchInput}) {

  let data = null;

    console.log(SearchInput);
    if (SearchInput === "athletic")
    {
      data = athletic;
    }
    else if (SearchInput === "Elon Musk")
    {
      data = elonMusk;
    }
    else if (SearchInput === "formula 1")
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