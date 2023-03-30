import './Sunburst.css';
import Sunburst from "../graficos/Sunburst";
import data1 from "../graficos/data"
import {Paper, Card} from '@material-ui/core';

function SunburstCard() {
  return (
    <div className="sunburstCard">
      <Card style={{ borderRadius: 20 }} elevation={3}>
        <h2 className="sunburstTitle">Hastags relacionados</h2>
        <div className="sunburstDisplay">

        <Sunburst
        data={data1}
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