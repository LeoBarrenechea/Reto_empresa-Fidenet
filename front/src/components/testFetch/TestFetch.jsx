import { lazy, useContext, useEffect } from "react";
import ApiCall from "../apiCall/Apicall";
import { MyContext } from "../myContext/MyContext";
import Sunburst from "../graficos/Sunburst";
import FilterData from "../filterData/FilterData";
/* import data from "../graficos/data";
 */
import data1 from "../graficos/data"
import Mapa from "../Mapa/Mapa";
import Lineas from "../Lineas/Lineas"
import Sidenav from "../Sidenav/Sidenav";



export default function TestFetch()
{
    let {data, setData, setMentions, mentions,setType,setProbability, probability, type} = useContext(MyContext);

    useEffect(() => {
            ApiCall({setData}, 'https://smartketing.onrender.com/tw_extraction/athletic')
    }, [])

        FilterData({data, setMentions, setProbability, setType,mentions, type, probability});

    /* useEffect(() => {
        if(type !== '')
            console.log(type);
    }, [type])
    useEffect(() => {
        if (mentions.length > 0)
            console.log(mentions[0].probability);
    }, [mentions])
    useEffect(() => {
        if(type !== '')
            console.log(probability)
    }, [probability]) */


        
    return (
        <>
        <Sidenav z-index="99"/>
        <h1>testDatos</h1>
        {
            data ?
            <Sunburst 
            data={data[0]}
            scale="linear"
            tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
            tooltip
            tooltipPosition="right"
            keyId="anagraph"
            width="1000"
            height="900"
            count_member="probability"
            font_size={12}
            labelFunc={node => node.data[0]}
            />
            : <></>
        }
    </>
    )
}
