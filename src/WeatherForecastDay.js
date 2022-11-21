import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.date * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
    <div>
        <div className="WeatherForecastDay">{day()}</div>
<WeatherIcon code={props.data.weather[0].icon} size="36"/>
<div className="WeatherForecastTemperature">
    <span className="WeatherForecastTemperatureMax">{Math.round(props.data.temp.max)}° </span>
    <span className="WeatherForecastTemperatureMin">{Math.round(props.data.temp.min)}°</span>
    </div>
    </div>
    );
}