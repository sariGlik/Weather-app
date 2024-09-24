// import React from 'react'

// export default function WeatherInfo(props) {
// let info=props.info;

//   return (
//     <div className="container mt-5">
//       {/* כותרת לטופס */}
//       <h2 className="text-center mb-4">Weather Details of {info.name} </h2>
//        <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="weater icon" width="170" id="img"/>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow-sm">
//             <div className="card-body">

//               {/* תצוגת טמפרטורה */}
//                <div className="mb-3">
//                 <h5 className="card-title">Temperature</h5>
//                 <p className="card-text">{info.main.temp} °C</p>
//               </div>

//               {/* תצוגת מצב מזג אוויר */}
//               <div className="mb-3">
//                 <h5 className="card-title">Condition</h5>
//                 <p className="card-text">{info.weather[0].main}</p>
//               </div>

//                {/* תצוגת רוח */}
//                  <div className="mb-3">
//                 <h5 className="card-title">Wind</h5>
//                 <p className="card-text">{info.wind.speed} km/h</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

//   )
// }
import React from 'react';

export default function WeatherInfo(props) {
  let info = props.info;

  return (
    <div className="container mt-5">
      {/* בדיקה אם שם העיר קיים */}
      <h2 className="text-center mb-4">Weather Details of {info.name || 'Unknown'}</h2>
      
      {/* בדיקה אם יש מידע על מזג האוויר */}
      {info.weather && info.weather[0] && (
        <img src={`http://openweathermap.org/img/w/${info.weather[0].icon}.png`} alt="weather icon" width="170" id="img" />
      )}
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              
              {/* בדיקה אם המידע על הטמפרטורה קיים */}
              {info.main && (
                <div className="mb-3">
                  <h5 className="card-title">Temperature</h5>
                  <p className="card-text">{info.main.temp} °C</p>
                </div>
              )}
              
              {/* בדיקה אם מצב מזג האוויר קיים */}
              {info.weather && info.weather[0] && (
                <div className="mb-3">
                  <h5 className="card-title">Condition</h5>
                  <p className="card-text">{info.weather[0].main}</p>
                </div>
              )}
              
              {/* בדיקה אם המידע על הרוח קיים */}
              {info.wind && (
                <div className="mb-3">
                  <h5 className="card-title">Wind</h5>
                  <p className="card-text">{info.wind.speed} km/h</p>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
