import { useContext, useEffect, useState } from "react";
import redHeartIcon from "../../assets/heart-red.svg";
import heart from "../../assets/heart.svg";
import { FavoriteContext, WeatherContext } from "../../context/index";

export default function AddToFavorite() {
  const { favorite, addToFavorite, removeFavorite } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const { latitude, longitude, location } = weatherData;

  const [isFav, setIsfav] = useState(false);

  // useEffect(() => {
  //   const found = favorite.find((fav) => fav.location === location);
  //   setIsfav(found);
  // }, []);
  useEffect(() => {
    const found = favorite.find((fav) => fav.location === location);
    setIsfav(found);
  }, [favorite, location]);

  function handelFavorite() {
    const found = favorite.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFavorite(location);
      console.log(found);
    }
    setIsfav(!isFav);
  }

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className=" text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handelFavorite}
        >
          <span>Add to Favourite</span>
          <img src={isFav ? redHeartIcon : heart} alt="" />
        </button>
      </div>
    </div>
  );
}
