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
import FilterData from '../filterData/FilterData';


export default function TestFetch() {

    let { data, setData, SearchInput, cloud, setCloud, setSearchInput, apiData, setApiData, setMentions, mentions, setType, setProbability, probability, type } = useContext(MyContext);
    const param = useParams();

    useEffect(() => {
        if (SearchInput !== '')
        console.log('entra en useEffect');
        if (SearchInput === 'Elon Musk')
            SearchInput = SearchInput.replace(" ", "_").toLowerCase();
        if (SearchInput === 'formula 1')
            SearchInput = SearchInput.replace(" ", "");
       fetch('https://smartketing.onrender.com/tw_extraction/'+ SearchInput)
            .then(res => res.json())
            .then(data => setApiData(data))
    },[SearchInput])

        FilterData({apiData, setMentions, cloud, setCloud});
 
    

    return (
        <>
            <Sidenav />
            <div className="wordPage">
                <h1 className="searchWord">{param.name}</h1>
                <div className="row">
                    <SunburstCard SearchInput={SearchInput} mentions={mentions}/>
                    <ReactWordCloudCard cloud={cloud}/>
                </div>
                <div className="column">
                    <LineasCard />
                    <MapaCard />

                </div>
            </div>
        </>
    )
}
