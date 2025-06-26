import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/index";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });

  const [error, setError] = useState(null);
  const { selectLocation } = useContext(LocationContext);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setLoading({
        state: true,
        message: "Fetching weather data...",
      });

      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Fetching weather data failed: ${response.status}`);
      }

      const data = await response.json();
      console.log("Weather array:", data.weather);

      setWeatherData({
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      });

      setError(null);
    } catch (err) {
      setError(err);
      console.error(err);
    } finally {
      setLoading({ state: false, message: "" });
    }
  };

  useEffect(() => {
    console.log("Selected location changed:", selectLocation);

    setLoading({
      ...loading,
      state: true,
      message: "Getting current location...",
    });

    if (selectLocation.longitude && selectLocation.latitude) {
      fetchWeatherData(selectLocation.latitude, selectLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
      });
    }
  }, [selectLocation]);

  return { weatherData, loading, error };
};

export default useWeather;
