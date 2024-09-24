import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
export default function WeatherForm() {
const inputRef=useRef();
const nav=useNavigate();
const OnSerch = () =>
{
  const searchValue = inputRef.current.value;
  // אם הערך ריק, נקבע ערך ברירת מחדל
  const town = searchValue ? searchValue : "Tel Aviv";
  nav(`/?q=${town}`);
}
  return (
    <div className="container text-center mt-5">
    {/* כותרת האפליקציה */}
    <h1 className="display-4 mb-4">Weather App</h1>
    
    {/* שדה החיפוש */}
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="input-group">
          <input 
           onKeyDown={(e)=>{
            if(e.key === "Enter") {OnSerch()}
           }
           }
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Search by city name"
            aria-label="City name"

          />
          <button className="btn btn-primary" type="button" onClick={OnSerch}>
            Search
          </button>
        </div>
      </div>
    </div>
    
    {/* עיצוב נוסף */}
    <p className="text-muted mt-3">Find the current weather for your city.</p>
  </div>

  )
}
