import { useNavigate } from "react-router-dom";
import logoHuella from "../../iconos-smartketing/logo-white.svg";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current.getBoundingClientRect().top === 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed-top">
      <nav
        ref={navbarRef}
        className={`navbar navbar-expand-lg ${
          isTransparent ? "bg-transparent" : "bg-body-tertiary"
        }`}
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
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Log in
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mi perfil
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Datos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Historial
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );

}
