import { useEffect, useState } from "react";
import CardData from "./components/CardData";
import CardTemp from "./components/CardTemp";
import Swicht from "./components/Swicht";
import { getLocation } from "./api/getLocation";
import { getWeather } from "./api/getweather";

function App() {
  const [dark, setDark] = useState(true);
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [faren, setfaren] = useState(false);
  //modo dark
  const handleChangeDark = () => {
    setDark(!dark);
  };

  const changeTemp = () => {
    setfaren(!faren);
  };

  // recibimos la geolocalizacion
  useEffect(() => {
    getLocation().then((res) => setCoords(res));
  }, []);

  // recibimos la API
  useEffect(() => {
    if (coords) {
      getWeather(coords.lat, coords.lon)
        .then((res) => setWeather(res))
        .catch((err) => console.log(err));
    }
  }, [coords]);

  let bgs = "";

  switch (weather?.icon) {
    case "01n":
    case "01d":
      bgs = "bg-sol";
      break;
    case "02n":
    case "02d":
      bgs = "bg-poc";
      break;
    case "03n":
    case "03d":
      bgs = "bg-nub";
      break;
    case "04n":
    case "04d":
      bgs = "bg-mnub";
      break;
    case "09n":
    case "09d":
      bgs = "bg-llu";
      break;
    case "10n":
    case "10d":
      bgs = "bg-mllu";
      break;
    case "11n":
    case "11d":
      bgs = "bg-ray";
      break;
    case "13n":
    case "13d":
      bgs = "bg-nie";
      break;
    case "50n":
    case "50d":
      bgs = "bg-vie";
      break;
  }

  console.log(bgs);
  return (
    <div
      className={`${
        dark ? "brightness-50" : "brightness-100"
      } flex flex-col items-center justify-evenly h-screen ${bgs} bg-cover bg-center `}
    >
      <Swicht handleChangeDark={handleChangeDark} />
      <div className="flex flex-col items-center justify-center w-screen gap-4 xl:gap-6">
        <h2 className=" text-2xl font-bold drop-shadow-md">
          {weather?.name}, {weather?.country}
        </h2>
        <div className="flex flex-col items-center justify-center w-screen gap-4 sm:flex-row lg:gap-5 xl:gap-7">
          <CardTemp weather={weather} faren={faren} />
          <CardData />
        </div>
        <button
          className="px-2 border bg-white text-button-text font-medium rounded-[19px] w-[134px] h-[30px]"
          onClick={changeTemp}
        >
          Cambiar {faren ? "C°" : "F°"}
        </button>
      </div>
      <p className=" text-white text-md drop-shadow-md mt-9">
        Fotos: pixabay.com
      </p>
    </div>
  );
}

export default App;
