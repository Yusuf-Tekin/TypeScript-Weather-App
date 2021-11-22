import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import WeatherC from './Components/WeatherC';
import Footer from './img/footer.png'
import { WeatherType } from './Types';
import useGeolocation from 'react-hook-geolocation'
function App() {

  const [weather, setWeather] = useState<WeatherType | null>(null)
  const {latitude,longitude} = useGeolocation()
  const [loading, setLoading] = useState<boolean>(false)
  let key = 'a2e853a5e794e489e2bb0f7c2583cd7e'

  let lang = navigator.language;
  const langType = lang.split('-')[0]

  const getData = async (lat: number | null, lon: number | null) => {
    try{
      const { data } = await axios.get<WeatherType>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric&lang=${langType}`)
      setWeather(data);
    }catch(err){
      alert('Bir hata oluştu')
    }
  }

  useEffect(() => {
    latitude && longitude && getData(latitude, longitude);
  }, [latitude,longitude])

  
  return (
    <div className="App">

      <WeatherC weather = {weather} />      

      <img alt="footer" className="footerImg" src={Footer}></img>
    </div>
  );
}

export default App;
