// import { useState } from "react";
// import search from "../../iconos-smartketing/search.svg";
// import searchBlue from "../../iconos-smartketing/search-blue.svg";
// import "./Search.css";
// import Sidenav from "../Sidenav/Sidenav";

// export default function Search() {
//   const [visible, setVisible] = useState(false);
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (event) => {
//     if (event.target.value !== "") {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//     setInputValue(event.target.value);
//   };
//   const clearInput = () => {
//     setInputValue("");
//     setVisible(false);
//   };

//   return (
//     <>
//           <Sidenav/>
//       <div className="pagSearch">
//         <div className="buscar">
//           <input
//             type="text"
//             placeholder="Buscar"
//             required
//             value={inputValue}
//             onChange={handleChange}
//             />
//           <div className={`btn ${visible ? "active" : ""}`}>
//             <img src={visible ? searchBlue : search} alt="search" />
//           </div>
//           <span className="clear" onClick={clearInput}></span>
//         </div>
//       </div>
//     </>
//   );
// }

import { useState } from "react";
import search from "../../iconos-smartketing/search.svg";
import searchBlue from "../../iconos-smartketing/search-blue.svg";
import "./Search.css";
import Sidenav from "../Sidenav/Sidenav";
import ApiCall from "../apiCall/Apicall";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [Search, setSearch] = useState("");

  const navigate = useNavigate();

  const cambioColor = (event) => {
    if (event.target.value !== "") {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setSearch(event.target.value)
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    setVisible(false);
  };
  
  const busqueda = () => {
    console.log(Search);
    let tkn =localStorage.getItem('token')
    console.log(tkn);
    let data = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn}`
      },
      body: JSON.stringify({"value":Search})
    }
    fetch("http://localhost:3001/users/updatesearch", data)
      .then(res => res.json())
      .then(data => console.log(data))

    navigate('/graphics');

  };

  return (
    <>
      <Sidenav />
      <div className="pagSearch">
        <div className="buscar">
          <input
            type="text"
            placeholder="Buscar"
            required
            value={inputValue}
            onChange={cambioColor}
          />
          <div className={`btn ${visible ? "active" : ""}`} onClick={busqueda}>
            <img src={visible ? searchBlue : search} alt="search" />
          </div>
          <span className="clear" onClick={clearInput}></span>
        </div>
      </div>
    </>
  );
}
