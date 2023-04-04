import "./Sidenav.css";
import logout from "../../iconos-smartketing/logout.svg";
import search from "../../iconos-smartketing/search.svg";
import question from "../../iconos-smartketing/question-circle.svg";
import document from "../../iconos-smartketing/file-earmark-text.svg";
import logo from "../../iconos-smartketing/favicon.png";
import Swal from "sweetalert2";
import { useContext, useRef } from "react";
import { MyContext } from "../myContext/MyContext";

export default function Sidenav() {
  const token = localStorage.getItem('token');
  const imgRef = useRef();

  let {SearchInput} = useContext(MyContext);

  const handleQuestionClick = () => {
    Swal.fire({
      icon: "question",
      title: "¿Cómo funciona?",
      text: "Haz click en la lupa central y busca información sobre el tema que desees",
    });
  };
  const clickLogout = (event) => {
    event.preventDefault(); // evita el comportamiento predeterminado de hacer clic en el enlace
    Swal.fire({
      icon: "question",
      title: "¿Estás seguro de que quieres cerrar sesión?",
      confirmButtonText: "Sí, cerrar sesión",
      cancelButtonText: "Cancelar",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        Swal.fire({
          icon: "success",
          title: "Log Out realizado con éxito",
          text: "Has cerrado sesión correctamente. Vuelve pronto",
        }).then(() => {
          window.location.href = "/";
        });
      }
    });
  };

  return (
    <div className={`position-fixed sidenav `}>
      <ul className="nav flex-column ">
        <li className="nav-item">
          <a href="/" title="FIDENET">
            <img className="nav-logo" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/search" title="Búsqueda">
            <img className="nav-link" src={search} alt="search" />
          </a>
        </li>
        <li className="nav-item">
          {SearchInput === '' ? <></>
            :
            <a href={`/graphics/${SearchInput}`} title={SearchInput}>
              <img className="nav-link" ref={imgRef}  src={document} alt={SearchInput} />
            </a>
          }
        </li>
        <li className="nav-item" >
          <a onClick={handleQuestionClick} title="Como funciona">
            <img className="nav-link" src={question} alt="question" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/" title="Log out" onClick={clickLogout}>
            <img className="nav-link" src={logout} alt="logout" />
          </a>
        </li>
      </ul>
    </div>
  );
}