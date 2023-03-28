import { useContext, useEffect } from "react";
import ApiCall from "../apiCall/Apicall";
import { MyContext } from "../myContext/MyContext";

export default function TestFetch()
{
    let {data, setData} = useContext(MyContext);
    useEffect(() => {

        ApiCall({setData}, 'https://smartketing.onrender.com/tw_extraction/athletic')
        console.log(data);
    }, [])
        
    return (
        <h1>testDatos</h1>
    )
}