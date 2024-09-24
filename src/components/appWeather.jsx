import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import axios from 'axios'
import {useSearchParams} from 'react-router-dom';
export default function AppWeather()
{
let [info,setInfo]=useState({});
const [errorMessage, setErrorMessage] = useState(""); // הוספת state לשגיאה

const [query] = useSearchParams();
useEffect(()=>
{
const town = query.get("q") || "Tel Aviv"; // ברירת מחדל לעיר תל אביב אם אין שאילתה
doApi(town);
},[query]);

const doApi=async(_town )=>
{
    try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${_town}&APPID=879fe4d531c519e25c2bf4b3417fe261&units=metric`;
    let resp=await axios.get(url);
    console.log(resp.data);
    setInfo(resp.data);
    setErrorMessage('');
    }
    catch(error)
    {
            if (error.response && error.response.status === 404) {
              console.error("City not found:", _town);
              setErrorMessage("City not found. Please try another city."); // הצגת הודעת שגיאה
              
            } else {
              console.error("An error occurred:", error);
              setErrorMessage("An unexpected error occurred. Please try again.");
            }
    }
    
}
    return (
        <div className='container'>
        <WeatherForm/>

        {errorMessage&& 
         <div className="alert alert-danger" role="alert" >
          {errorMessage}
         </div>
        
         }
        {info.name&& <WeatherInfo info={info} />}
        
        </div>
    )

}