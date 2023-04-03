import { useEffect } from "react";

export default function ApiCall({ data, setData }, url, userData = {method: 'GET', mode:'cors',  'headers': {'Access-Control-Allow-Origin': '*',}})
{
   console.log(url);
        fetch(url, userData)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
            });
    return data;
}