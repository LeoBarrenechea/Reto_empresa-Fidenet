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


export default function TestFetch() {

<<<<<<< HEAD
    let { data, setData, setMentions, mentions, setType, setProbability, probability, type } = useContext(MyContext);

    // useEffect(() => {
    //     ApiCall({ setData }, 'https://smartketing.onrender.com/tw_extraction/athletic')
    // }, [])

    // FilterData({ data, setMentions, setProbability, setType, mentions, type, probability });

    // useEffect(() => {

    //     ApiCall({ setData }, 'https://smartketing.onrender.com/tw_extraction/athletic')
    //     console.log(data);
    // }, [])

    // useEffect(() => {
    //     if (type !== '')
    //         console.log(type);
    // }, [type])

    // useEffect(() => {
    //     if (mentions.length > 0)
    //         console.log(mentions[0].probability);
    // }, [mentions])

    // useEffect(() => {
    //     if (type !== '')
    //         console.log(probability)
    // }, [probability])
=======
    let { SearchInput, setSearchInput, data, setData, setMentions, mentions, setType, setProbability, probability, type } = useContext(MyContext);
    console.log(SearchInput);
>>>>>>> 464670d53f936b57fa9a2ab098596a1dcdf8dbeb

    return (
        <>
            <Sidenav />
            <div className="wordPage">
                <h1 className="searchWord">Palabra</h1>
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
