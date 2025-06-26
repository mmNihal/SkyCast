import { useContext } from "react";
import cloudIcon from "../../assets/cloud.svg";
import hazeIcon from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunIcon from "../../assets/icons/sunny.svg";
import pin from "../../assets/pin.svg";
import rainyIcon from "../../assets/rainy.svg";
import thunderIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context/index";
import { getFromattedDate } from "../../utils/date_utils";

export default function WeatherHeadding() {
  const { weatherData } = useContext(WeatherContext);

  const { temperature, climate, time, location } = weatherData;

  console.log(time);
  function getWeatherIcon(description = "") {
    const desc = description.toLowerCase();

    if (desc.includes("clear")) return sunIcon;
    if (desc.includes("few clouds")) return cloudIcon;
    if (desc.includes("scattered clouds")) return cloudIcon;
    if (desc.includes("broken clouds")) return cloudIcon;
    if (desc.includes("overcast clouds")) return hazeIcon;
    if (desc.includes("rain") || desc.includes("drizzle")) return rainyIcon;
    if (desc.includes("thunderstorm")) return thunderIcon;
    if (desc.includes("snow")) return snowIcon;
    if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze"))
      return hazeIcon;

    return sunIcon; // default icon
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFromattedDate(time, "time", false)} -{" "}
        {getFromattedDate(time, "date", false)}
      </p>
    </div>
  );
}
