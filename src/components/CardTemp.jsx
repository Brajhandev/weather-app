import { useState } from "react";
import broken from "../assets/broken.png";
import clear from "../assets/clear.png";
import few from "../assets/few.png";
import mist from "../assets/mist.png";
import rain from "../assets/rain.png";
import scatt from "../assets/scattered.png";
import show from "../assets/shower.png";
import snow from "../assets/snow.png";
import thunder from "../assets/thunder.png";
import brokenn from "../assets/nigth/broken.png";
import clearn from "../assets/nigth/clear.png";
import fewn from "../assets/nigth/few.png";
import mistn from "../assets/nigth/mist.png";
import rainn from "../assets/nigth/rain.png";
import scattn from "../assets/nigth/scatt.png";
import shown from "../assets/nigth/shower.png";
import snown from "../assets/nigth/snow.png";
import thundern from "../assets/nigth/thunder.png";

const CardTemp = ({ weather, faren }) => {
  let img = "";

  if (weather?.nigth) {
    switch (weather?.icon) {
      case "01n":
        img = clearn;
        break;
      case "02n":
        img = fewn;
        break;
      case "03n":
        img = scattn;
        break;
      case "04n":
        img = brokenn;
        break;
      case "09n":
        img = shown;
        break;
      case "10n":
        img = rainn;
        break;
      case "11n":
        img = thundern;
        break;
      case "13n":
        img = snown;
        break;
      case "50n":
        img = mistn;
        break;
    }
  }
  else {
    switch (weather?.icon) {
      case "01d":
        img = clear;
        break;
      case "02d":
        img = few;
        break;
      case "03d":
        img = scatt;
        break;
      case "04d":
        img = broken;
        break;
      case "09d":
        img = show;
        break;
      case "10d":
        img = rain;
        break;
      case "11d":
        img = thunder;
        break;
      case "13d":
        img = snow;
        break;
      case "50d":
        img = mist;
        break;
    }
  }

  console.log(img);
  return (
    <article className=" bg-bg-card flex flex-col w-[90%] rounded-[38px] pt-4 pb-4 sm:w-auto sm:px-7">
      <div>
        <p className=" text-[19px] text-text-subtitle text-center md:text-[25px]">
          {weather?.weather.description}
        </p>
      </div>
      <div className="flex justify-evenly items-center gap-4">
        <p className=" text-[100px] font-light md:text-[128px]">
          {faren
            ? (((Number(weather?.temp.temp) - 273.15) * 9) / 5 + 32).toFixed(0)
            : Number(weather?.temp.temp).toFixed(0) - 273}
          °
        </p>
        <img src={img} className="w-[72px] h-[72px]" alt="" />
      </div>
    </article>
  );
};

export default CardTemp;
