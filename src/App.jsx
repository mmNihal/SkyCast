import "./App.css";
import Page from "./page";
// App.jsx
// import {
//   FavouriteProvider,
//   LocationsProvider,
//   WeatherProvider,
// } from "./provider";

import {
  FavoriteProvider,
  LocationsProvider,
  WeatherProvider,
} from "./provider/index.js";

function App() {
  return (
    <LocationsProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationsProvider>
  );
}

export default App;
