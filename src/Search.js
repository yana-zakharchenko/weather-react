import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState(" ");
  let [message, setMessage] = useState(false);
  let [temperature, setTemperature] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [description, setDescription] = useState(null);
  let [icon, setIcon] = useState(null);

  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setDescription(response.data.weather[0].description);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b27b2f657cf5ffcaaf947445cdf22f8b`;
    axios.get(url).then(showWeather);
    setMessage(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Type a city" onChange={updateCity} />
      <input type="submit" value="Submit" />
    </form>
  );

  if (message) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(temperature)}°C</li>
          <li>Humidity: {humidity}%</li>
          <li>Wind: {wind}km/h</li>
          <li>Description: {description}</li>
          <li>
            <img src={icon} width={100} alt={description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
