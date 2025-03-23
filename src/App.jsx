import { useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCard from './components/WeatherCard'
import SearchBar from './components/SearchBar'

const App = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [forecast, setForecast] = useState()
  const [showNotification, setShowNotification] = useState(false);

  const fetchWeather = async (city) => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=4&aqi=no&alerts=no`

      const response = await axios.get(url)
      setWeatherData(response.data.current)
      setForecast(response.data.forecast.forecastday)
    } catch {
      setWeatherData(null)
      setShowNotification(true)
      setTimeout(() => {
        setShowNotification(false)
      }, 4000)
    }
  }

  return (
    <div className="app-container">
      <h1>Weather App</h1>
      <SearchBar onSearch={fetchWeather} />
      {showNotification && (
        <div className="notification">
          <p>Could not fetch weather data.</p>
          <p>Please check the city name.</p>
        </div>
      )}
      {weatherData && (
        <WeatherCard weather={weatherData} forecast={forecast}/>
      )}
    </div>
  )
}

export default App
