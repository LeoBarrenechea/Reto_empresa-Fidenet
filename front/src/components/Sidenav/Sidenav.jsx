import "./Sidenav.css";
import logout from "../../iconos-smartketing/logout.svg";
import search from "../../iconos-smartketing/search.svg";
import question from "../../iconos-smartketing/question-circle.svg";
import document from "../../iconos-smartketing/file-earmark-text.svg";
import logo from "../../iconos-smartketing/favicon.png";
import Swal from "sweetalert2";

export default function Sidenav() {
  const handleQuestionClick = () => {
    Swal.fire({
      icon: "question",
      title: "¿Cómo funciona?",
      text: "Haz click en la lupa central y busca información sobre el tema que desees",
    });
  };

  return (
    <div className="position-fixed sidenav">
      <ul className="nav flex-column ">
        <li className="nav-item">
          <a href="/" title="FIDENET">
            <img className="nav-link" src={logo} alt="logo" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/search" title="Búsqueda">
            <img className="nav-link" src={search} alt="search" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/documentos" title="Documentos">
            <img className="nav-link" src={document} alt="documents" />
          </a>
        </li>
        <li className="nav-item" style={{ marginTop: "250px" }}>
          <a onClick={handleQuestionClick} title="Como funciona">
            <img className="nav-link" src={question} alt="question" />
          </a>
        </li>
        <li className="nav-item">
          <a href="/" title="Log out">
            <img className="nav-link" src={logout} alt="logout" />
          </a>
        </li>
      </ul>
    </div>
  );
}

// import "./Sidenav.css";
// import logout from "../../iconos-smartketing/logout.svg";
// import search from "../../iconos-smartketing/search.svg";
// import question from "../../iconos-smartketing/question-circle.svg";
// import document from "../../iconos-smartketing/file-earmark-text.svg";
// import logo from "../../iconos-smartketing/favicon.png";
// import { useState } from "react";

// export default function Sidenav() {
//   const [showLabel, setShowLabel] = useState(false);

//   const handleQuestionClick = () => {
//     setShowLabel(true);
//   };

//   return (
//     <div className="position-fixed sidenav">
//       <ul className="nav flex-column ">
//         <li className="nav-item">
//           <a href="/" title="FIDENET">
//             <img className="nav-link" src={logo} alt="logo" />
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="/search" title="Búsqueda">
//             <img className="nav-link" src={search} alt="search" />
//           </a>
//         </li>
//         <li className="nav-item">
//           <a href="/documentos" title="Documentos">
//             <img className="nav-link" src={document} alt="documents" />
//           </a>
//         </li>
//         <li className="nav-item" style={{ marginTop: "250px" }}>
//           {showLabel ? (
//             <div className="label">
//               <span>Cómo funciona</span>
//             </div>
//           ) : (
//             <a onClick={handleQuestionClick} title="Como funciona">
//               <img className="nav-link" src={question} alt="question" />
//             </a>
//           )}
//         </li>
//         <li className="nav-item">
//           <a href="/" title="Log out">
//             <img className="nav-link" src={logout} alt="logout" />
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }

