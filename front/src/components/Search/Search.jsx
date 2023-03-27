import { useState } from "react";
import search from "../../iconos-smartketing/search.svg";
import searchBlue from "../../iconos-smartketing/search-blue.svg";
import "./Search.css";
import Sidenav from "../Sidenav/Sidenav";

export default function Search() {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    if (event.target.value !== "") {
      setVisible(true);
    } else {
      setVisible(false);
    }
    setInputValue(event.target.value);
  };
  const clearInput = () => {
    setInputValue("");
    setVisible(false);
  };

  return (
    <>
          <Sidenav/>
      <div className="pagSearch">
        <div className="buscar">
          <input
            type="text"
            placeholder="Buscar"
            required
            value={inputValue}
            onChange={handleChange}
            />
          <div className={`btn ${visible ? "active" : ""}`}>
            <img src={visible ? searchBlue : search} alt="search" />
          </div>
          <span className="clear" onClick={clearInput}></span>
        </div>
      </div>
    </>
  );
}
