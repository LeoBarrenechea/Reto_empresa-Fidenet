import './Lineas.css';
import Lineas from './Lineas';
import { Paper, Card } from '@material-ui/core';

function LineasCard() {
    return (
      <div className="lineasCard">
        <Card style={{ borderRadius: 20 }} elevation={3}>
          <h2 className="lineasTitle">Sentimientos</h2>
          <div className="lineasDisplay">
            <Lineas />
          </div>
        </Card>
      </div>
    );
  }
  
  export default LineasCard;