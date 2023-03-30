import './testFetch.css';
import { useContext, useEffect } from "react";
import ApiCall from "../apiCall/Apicall";
import { MyContext } from "../myContext/MyContext";
import Sunburst from "../graficos/Sunburst";
import FilterData from "../filterData/FilterData";
/* import data from "../graficos/data";
 */
import data1 from "../graficos/data"
import ReactWordCloudCard from "../word-cloud/ReactWordCloudCard"
import SunburstCard from "../graficos/SunburstCard";

import Mapa from "../Mapa/Mapa";
import Lineas from "../Lineas/Lineas"
import Sidenav from "../Sidenav/Sidenav";


export default function TestFetch() {

    let { data, setData, setMentions, mentions, setType, setProbability, probability, type } = useContext(MyContext);

    useEffect(() => {
        ApiCall({ setData }, 'https://smartketing.onrender.com/tw_extraction/athletic')
    }, [])

    FilterData({ data, setMentions, setProbability, setType, mentions, type, probability });

    useEffect(() => {

        ApiCall({ setData }, 'https://smartketing.onrender.com/tw_extraction/athletic')
        console.log(data);
    }, [])

    useEffect(() => {
        if (type !== '')
            console.log(type);
    }, [type])

    useEffect(() => {
        if (mentions.length > 0)
            console.log(mentions[0].probability);
    }, [mentions])
    
    useEffect(() => {
        if (type !== '')
            console.log(probability)
    }, [probability])

    return (
        <>
            <Sidenav />
            <h1>testDatos</h1>
            <div className="row1">
                <SunburstCard />
                <ReactWordCloudCard />
            </div>
            <Lineas />
            <Mapa />
        </>
    )
}
