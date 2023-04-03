import { useEffect } from "react";

export default function ApiCall({ apiData, setApiData }, url, userData = {method: 'GET', mode:'cors',  'headers': {'Access-Control-Allow-Origin': '*',}})
{
   console.log(url);
        fetch(url, userData)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setApiData(data);
            });
    return apiData;
}