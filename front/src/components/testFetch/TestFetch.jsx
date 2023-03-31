import './testFetch.css';
import { useContext, useEffect } from "react";
import ApiCall from "../apiCall/Apicall";
import { MyContext } from "../myContext/MyContext";
import Sunburst from "../graficos/Sunburst";
/* import data from "../graficos/data";
 */
import data1 from "../graficos/data"
import ReactWordCloudCard from "../word-cloud/ReactWordCloudCard"
import SunburstCard from "../graficos/SunburstCard";
import LineasCard from "../Lineas/LineasCard"
import MapaCard from "../Mapa/MapaCard"

import Mapa from "../Mapa/Mapa";
// import Lineas from "../Lineas/Lineas"
import Sidenav from "../Sidenav/Sidenav";
import { useParams } from 'react-router-dom';


export default function TestFetch() {

    let { SearchInput, setSearchInput, data, setData, setMentions, mentions, setType, setProbability, probability, type } = useContext(MyContext);
    console.log(SearchInput);
    const param = useParams();
    return (
        <>
            <Sidenav />
            <div className="wordPage">
                <h1 className="searchWord">{param.name}</h1>
                <div className="row">
                    <SunburstCard SearchInput={SearchInput}/>
                    <ReactWordCloudCard SearchInput={SearchInput}/>
                </div>
                <div className="column">
                    <LineasCard />
                    <MapaCard />

                </div>
            </div>
        </>
    )
}
