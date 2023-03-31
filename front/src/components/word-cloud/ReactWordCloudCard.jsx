import './ReactWordCloud.css';
import ReactWordCloud from './ReactWordCloud';
import { Paper, Card } from '@material-ui/core';

function ReactWordCloudCard() {
  return (
    <div className="wordCloudCard">
      <Card style={{height:620, borderRadius: 20 }} elevation={3}>
        <h2 className="wordCloudTitle">Palabras relacionadas</h2>
        <div className="wordCloudDisplay">
          <ReactWordCloud />
        </div>
      </Card>
    </div>
  );
}

export default ReactWordCloudCard;