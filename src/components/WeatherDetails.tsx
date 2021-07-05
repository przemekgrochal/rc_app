import React from "react";
import { FetchDataType } from '../utilities/fetchData'
import './style/WeatherDetails.scss';

type Props = {
  weather: FetchDataType | null
}

const WeatherDetails: React.FC<Props> = ({weather}) => {
  return (
    <div className="weather-details-container">
      { weather ? 
          <>
            <div>Weather for: {weather.name}, {weather.sys.country}</div>
            <div>Temperature: {weather.main.temp} &#8451;</div>
            <div>Air humidity: {weather.main.humidity} %</div>
            <div>Wind speed: {weather.wind.speed} km/h</div>
          </>
        : 
        'The server encountered an error or the weather was not found for the specified city, try again'
      }
    </div>
  );
}

export default WeatherDetails;
