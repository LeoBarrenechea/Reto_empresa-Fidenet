
import { useContext, useState } from "react";
import search from "../../iconos-smartketing/search.svg";
import searchBlue from "../../iconos-smartketing/search-blue.svg";
import "./Search.css";
import Sidenav from "../Sidenav/Sidenav";
import ApiCall from "../apiCall/Apicall";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../myContext/MyContext";
import Swal from "sweetalert2";

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  let {SearchInput, setSearchInput} = useContext(MyContext);

  const cambioColor = (event) => {
    if (event.target.value !== "") {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setSearchInput(event.target.value)
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
    setVisible(false);
  };
  
  const busqueda = () => {
    console.log(SearchInput);
    let tkn =localStorage.getItem('token')
    console.log(tkn);
    let data = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn}`
      },
      body: JSON.stringify({"value":SearchInput})
    }
    fetch("http://localhost:3001/users/updatesearch", data)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.msg === 'no guardado')
        {
          Swal.fire({
            icon: 'info',
            title: 'Oops...',
            text: 'inicia sesión para tener acceso',          
          });
        }

        else if(data.msg === 'exceso de busquedas')
        {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Has alcanzado el límite de búsquedas',
              footer: 'hazte premium para mas busquedas'
            });
        }

        else if (data.msg === 'guardado')
        {
          navigate(`/graphics/${SearchInput}`);
        }
      })


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
            <img src={search} alt="search" />
          </div>
          <span className="clear" onClick={clearInput}></span>
        </div>
      </div>
    </>
  );
}
