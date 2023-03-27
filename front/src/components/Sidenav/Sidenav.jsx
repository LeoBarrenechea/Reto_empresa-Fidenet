import "./Sidenav.css"
import gear from "../../iconos-smartketing/gear.svg";
import search from "../../iconos-smartketing/search.svg";
import question from "../../iconos-smartketing/question-circle.svg";
import document from "../../iconos-smartketing/file-earmark-text.svg";
import { useState } from "react";

export default function Sidenav() {
//  const [showInput, setShowInput] = useState(false)

//  const hacerClick = ()=> {
//   setShowInput(!showInput)
//  }
  return (
    <div className="position-fixed sidenav">
      <ul className="nav flex-column" >
        <li className="nav-item">
            <img className="nav-link" src={question} alt="question" />
        </li>
        <li className="nav-item">
            <img className="nav-link" src={document} alt="documents" />
        </li>
        <li className="nav-item">
            <img className="nav-link" src={search} alt="search" />
        </li>
        {/* input de barra de busqueda */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#" title="Búsqueda" onClick={hacerClick} >
          <img src={search} alt="search"/>
          </a>
          {showInput && <input type="text" className="search-input"/> }
        </li> */}
        <li className="nav-item">
            <img className="nav-link" src={gear} alt="ajustes" />
          <a className="nav-link" href="#" title="Ajustes">
          </a>
        </li>

      </ul>
    </div>
  );
}
