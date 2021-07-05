import React, { useState, useEffect } from "react";
import {
  Link,
  useParams,
} from "react-router-dom";
import { urlApi, urlApi2 } from '../../const/const';
import { fetchData, FetchDataType } from "../../utilities/fetchData";
import WeatherDetails from '../../components/WeatherDetails';
import CompareWeather from '../../components/CompareWeather';
import './style/CityPage.scss';

const CityPage = () => {
  let { cityName } = useParams<any>();
  const [ dataWeather, setDataWeather ] = useState<FetchDataType | null>(null);
 
  useEffect(() => {
    let repleaceUrlApi =  urlApi2.replace("cityName", cityName);

    fetchData(repleaceUrlApi, "GET", null)
    .then((res) => {
      if(res.message) return;
      setDataWeather(res);
    })
  },[cityName]);

  return (
      <div className="city-container">    
        <WeatherDetails weather={dataWeather} />
        <CompareWeather weather={dataWeather} />
        <Link to={`/`}>Back</Link>
      </div>
  );
};

export default CityPage;
