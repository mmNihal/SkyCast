import { useContext } from "react";
import search from "../../assets/search.svg";
import { LocationContext } from "../../context/index";
import { getLocationByName } from "../../data/location-data";
import useDebounce from "../../hook/useDebounce";

export default function Search() {
  const { setSelectLocation } = useContext(LocationContext);

  const doSearch = useDebounce((team) => {
    console.log(team);
    const fetchedLocation = getLocationByName(team);
    console.log(fetchedLocation);
    setSelectLocation({ ...fetchedLocation });
  }, 1000);

  function handelChange(e) {
    const value = e.target.value;
    doSearch(value);
  }

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          onChange={handelChange}
          placeholder="Search Location"
          required
        />
        <button type="submit">
          <img src={search} />
        </button>
      </div>
    </form>
  );
}
