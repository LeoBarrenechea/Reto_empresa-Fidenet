import "./Sidenav.css";
import gear from "../../iconos-smartketing/gear.svg";
import search from "../../iconos-smartketing/search.svg";
import question from "../../iconos-smartketing/question-circle.svg";
import document from "../../iconos-smartketing/file-earmark-text.svg";
import logo from "../../iconos-smartketing/favicon.png";
// import { useNavigate } from "react-router-dom";

export default function Sidenav() {
  // const navigate = useNavigate();

  return (
    <div className="position-fixed sidenav">
      <ul className="nav flex-column ">
        <li className="nav-item">
          <a href="/" title="FIDENET">
            <img className="nav-link" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/acerca-de" title="Acerca de">
            <img className="nav-link" src={question} alt="question" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/documentos" title="Documentos">
            <img
              className="nav-link"
              src={document}
              alt="documents"
              // onClick={() => navigate("/")}
            />
          </a>
        </li>
        <li className="nav-item">
          <a href="/busqueda" title="Búsqueda">
            <img className="nav-link" src={search} alt="search" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/ajustes" title="Ajustes">
            <img className="nav-link" src={gear} alt="ajustes" />
          </a>
        </li>
      </ul>
    </div>
  );
}
