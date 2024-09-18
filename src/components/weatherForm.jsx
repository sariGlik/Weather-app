import React from 'react'

export default function WeatherForm() {

  return (
    
    <div className="container text-center mt-5">
    {/* כותרת האפליקציה */}
    <h1 className="display-4 mb-4">Weather App</h1>
    
    {/* שדה החיפוש */}
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search by city name"
            aria-label="City name"

          />
          <button className="btn btn-primary" type="button">
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
