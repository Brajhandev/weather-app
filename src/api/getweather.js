import axios from "axios";

export const getWeather = async (latitude, longitude) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=cfbabd5a23db066ab174c9347f775332`;
  const data = await axios.get(URL);
  let icon = data.data.weather[0].icon;
  let nigth = false;
  // console.log(icon[2]);
  if (icon[2] === "n") {
    nigth = true;
  }

  const weather = {
    name: data.data.name,
    country: data.data.sys.country,
    weather: data.data.weather[0],
    temp: data.data.main,
    nigth,
    icon: icon,
  };
  return weather;
};
