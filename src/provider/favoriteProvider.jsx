import { FavoriteContext } from "../context/index";
import { useLocalstorage } from "../hook/index";

const FavoriteProvider = ({ children }) => {
  const [favorite, setFavorite] = useLocalstorage("favorite", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorite([
      ...favorite,
      { latitude: latitude, longitude: longitude, location: location }, // ✅ fixed key name
    ]);
  };

  const removeFavorite = (location) => {
    const restFavorite = favorite.filter((fav) => fav.location !== location);
    setFavorite(restFavorite);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorite, addToFavorite, removeFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
