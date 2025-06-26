import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context/index";

export default function FavouriteLocations() {
  const { favorite } = useContext(FavoriteContext);
  const { setSelectLocation } = useContext(LocationContext);
  // console.log(favorite);
  // console.log(setSelectLocation);

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favorite.length > 0 ? (
          favorite.map((fav) => (
            <li key={fav.location} className="hover:bg-gray-200">
              <button
                onClick={() => {
                  console.log("Clicked fav:", fav);
                  setSelectLocation({
                    latitude: fav.latitude,
                    longitude: fav.longitude,
                    location: fav.location,
                  });
                }}
                className="w-full text-left"
              >
                {fav.location}
              </button>
            </li>
          ))
        ) : (
          <li className="px-4 text-gray-500">No favorite added!</li>
        )}
      </ul>
    </div>
  );
}
