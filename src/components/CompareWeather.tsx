
import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { RootReducerType } from '../redux/index';
import { setCurrentWeather } from '../redux/actions/weatherAction';
import { FetchDataType, fetchData } from '../utilities/fetchData'
import { urlApi, urlApi2 } from '../const/const';
import './style/CompareWeather.scss';

type Props = {
  weather: FetchDataType | null
}

const CompareWeather: React.FC<Props> = ({weather}) => {

  const dispatch = useDispatch();
  const { currentWeather } = useSelector((state: RootReducerType) => state.weatherReducer);

  useEffect(() => {
    let repleaceUrlApi =  urlApi2.replace('cityName', 'Warszawa');
    fetchData(repleaceUrlApi, "GET", null)
    .then((res) => {
      console.log(res);
      dispatch(setCurrentWeather(res))
    });
  },[dispatch]);

  const compareTemp = (currentTemp: number, weatherTemp: number): string => {

    if(currentTemp > weatherTemp) {
      let difference = currentTemp - weatherTemp;
      return `cipelej o ${difference}  degrees`;
    }

    if(currentTemp < weatherTemp) {
      return `colder about ${window.Math.abs(currentTemp - weatherTemp)} degrees` ;
    }

    return '';
  }

  const compareHumidity = (currentTemp: number, weatherTemp: number): string => {

    if(currentTemp > weatherTemp) {
      return `higher humidity by ${window.Math.abs(currentTemp - weatherTemp)} %` ;
    }

    if(currentTemp < weatherTemp) {
      return `quantity less ${window.Math.abs(currentTemp - weatherTemp)} %` ;
    }

    return '';
  }

  const compareWindSpeed = (currentTemp: number, weatherTemp: number): string => {

    if(currentTemp > weatherTemp) {
      return `prędkość wiatru większa o ${window.Math.abs(currentTemp - weatherTemp).toFixed(1)} km/h` ;
    }

    if(currentTemp < weatherTemp) {
      return `prędkość wiatru mniejsza o ${window.Math.abs(currentTemp - weatherTemp).toFixed(1)} km/h` ;
    }

    return '';
  }

  return (
    <div className="compare-container">
      <table>
        <thead>
        <tr>
          <th>City name</th>
          <th>Temperature</th>
          <th>Air humidity</th>
          <th>Wind speed</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {currentWeather?.name}, 
              {currentWeather?.sys.country} 
            </td>
            <td>
              {currentWeather?.main.temp.toFixed()} &#8451;
              <span style={{marginLeft: "10px"}}>{compareTemp(Number(currentWeather?.main.temp.toFixed()), Number(weather?.main.temp.toFixed()))}</span>
            </td>
            <td>
              {currentWeather?.main.humidity} %
              <span style={{marginLeft: "10px"}}>{compareHumidity(Number(currentWeather?.main.humidity.toFixed()), Number(weather?.main.humidity.toFixed()))}</span>
            </td>
            <td>
              {currentWeather?.wind.speed} km/h
              <span style={{marginLeft: "10px"}}>{compareWindSpeed(Number(currentWeather?.wind.speed), Number(weather?.wind.speed))}</span>
            </td>
          </tr>
          <tr>
            <td>{weather?.name}, {weather?.sys.country}</td>
            <td>{weather?.main.temp.toFixed()} &#8451;</td>
            <td>{weather?.main.humidity} %</td>
            <td>{weather?.wind.speed} km/h</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CompareWeather;
