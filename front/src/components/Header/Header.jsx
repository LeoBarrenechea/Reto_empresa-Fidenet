import { useNavigate } from "react-router-dom";
import logoHuella from "../../iconos-smartketing/logo-white.svg";
import "../Header/Header.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="fixed-top">
      <nav
        className={`navbar navbar-expand-lg`}
      >
        <div className="container-fluid">
          <a href="/">
            <img
              className="navbar-brand"
              src={logoHuella}
              alt="FIDENET"
              onClick={() => navigate("/")}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-itemHeader">
                <a className="nav-link" aria-current="page" href="#webInfo">
                  ¿Qué es Smartketing?
                </a>
              </li>
              <li className="nav-itemHeader">
                <a className="nav-link" href="/login">
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
