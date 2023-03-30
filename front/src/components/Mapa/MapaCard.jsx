import './Mapa.css';
import Mapa from './Mapa'
import { Paper, Card } from '@material-ui/core';

function MapaCard() {
  return (
    <div className="mapaCard">
      <Card style={{ borderRadius: 20 }} elevation={3}>
        <h2 className="mapaTitle">Mapa de calor</h2>
        <div className="mapaDisplay">
          <Mapa />
        </div>
      </Card>
    </div>
  );
}

export default MapaCard;