import React, { FunctionComponent } from 'react'
import './Weather.css'
import { WeatherType } from './../Types';

interface IPropsType {
    weather:WeatherType | null
}


const WeatherC:FunctionComponent<IPropsType> = (props) => {
    const {weather} = props;

    console.log(weather)
    return (
        <div className = "weather-component">
            <div className = "heat">
                {weather?.main.temp}°
                <span className ="smallText">
                    {weather?.weather[0].description}
                </span>

            </div>
            <div className = "country">
                {weather?.name}
            </div>
        </div>
    )
}

export default WeatherC
