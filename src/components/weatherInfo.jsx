import React from 'react'

export default function WeatherInfo() {


  return (
    <div className="container mt-5">
      {/* כותרת לטופס */}
      <h2 className="text-center mb-4">Weather Details</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              {/* תצוגת רוח */}
              <div className="mb-3">
                <h5 className="card-title">Wind</h5>
                <p className="card-text">{} km/h</p>
              </div>

              {/* תצוגת מצב מזג אוויר */}
              <div className="mb-3">
                <h5 className="card-title">Condition</h5>
                <p className="card-text">{}</p>
              </div>

              {/* תצוגת טמפרטורה */}
              <div className="mb-3">
                <h5 className="card-title">Temperature</h5>
                <p className="card-text">{} °C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
