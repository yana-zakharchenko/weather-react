import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import { cleanup } from "@testing-library/react";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);


    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);
    
    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
              <div className="row">
                {forecast.map(function (dailyForecast, index) {
                  if (index < 5) {
                    return (
                      <div className="col" key={index}>
                        <WeatherForecastDay data={dailyForecast} />
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
  } else {
    let apiKey = "1fd8093fa5ff12d796d7de756cc9d6b9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
 console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
    
    return null;
}
}