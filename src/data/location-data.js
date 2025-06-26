const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "Kolkata",
    latitude: 22.5726723,
    longitude: 88.3638815,
  },
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "Miami",
    latitude: 25.7617,
    longitude: 80.1918,
  },

  {
    location: "Warsaw",
    latitude: 52.2297,
    longitude: 21.0122,
  },

  {
    location: "Singapore",
    latitude: 1.2899175,
    longitude: 103.8519072,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Toronto",
    latitude: 43.6534817,
    longitude: -79.3839347,
  },
  {
    location: "Chattogram",
    latitude: 22.3569,
    longitude: 91.7832,
  },
  {
    location: "Rajshahi",
    latitude: 24.3745,
    longitude: 88.6042,
  },
  {
    location: "Khulna",
    latitude: 22.8456,
    longitude: 89.5403,
  },
  {
    location: "Sylhet",
    latitude: 24.8949,
    longitude: 91.8687,
  },
  {
    location: "Barishal",
    latitude: 22.701,
    longitude: 90.3535,
  },
  {
    location: "Rangpur",
    latitude: 25.746,
    longitude: 89.25,
  },
  {
    location: "Mymensingh",
    latitude: 24.7471,
    longitude: 90.4203,
  },
];

function getLocation() {
  return data;
}

function getLocationByName(location) {
  if (!location) {
    return null;
  }
  const filtered = data.filter((item) => item.location === location);

  console.log(filtered);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defultLocation;
  }
}
export { getLocation, getLocationByName };
