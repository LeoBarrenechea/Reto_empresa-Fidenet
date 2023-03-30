import { useContext, useEffect } from "react";
import ApiCall from "../apiCall/Apicall";
import { MyContext } from "../myContext/MyContext";
import Sunburst from "../graficos/Sunburst";
import data1 from "../graficos/data"
import Mapa from "../Mapa/Mapa";
import Lineas from "../Lineas/Lineas"
import Sidenav from "../Sidenav/Sidenav";

export default function TestFetch()
{
    let {data, setData} = useContext(MyContext);
    useEffect(() => {

        ApiCall({setData}, 'https://smartketing.onrender.com/tw_extraction/athletic')
        console.log(data);
    }, [])
        
    return (
        <>
        <Sidenav />
        <h1>testDatos</h1>
        <Sunburst 
        data={data1}
        scale="linear"
        tooltipContent={<div class="sunburstTooltip" style="position:absolute; color:'black'; z-index:10; background: #e2e2e2; padding: 5px; text-align: center;" />}
        tooltip
        tooltipPosition="right"
        keyId="anagraph"
        width="480"
        height="400"
        count_member="size"
        font_size={8}
        labelFunc={node => node.data.name}
        />
        <Lineas />
        <Mapa />
        </>
    )
}