import viento from "../assets/viento.png";
import humedad from "../assets/humedad.png";
import precip from "../assets/precip.png";

const CardData = () => {
  return (
    <article className="bg-bg-card flex justify-evenly rounded-[23px] w-[90%] items-center gap-2 py-7 sm:flex-col sm:w-auto sm:px-5 sm:h-full">
      <div className="flex gap-4 justify-center items-center">
        <img
          className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          src={viento}
          alt=""
        />
        <p className=" text-[19.2px] drop-shadow-md font-bold md:text-[24px]">
          21°
        </p>
      </div>
      <div className="w-[3px] h-[70px] bg-separador sm:w-[70px] sm:h-[3px]"></div>
      <div className="flex gap-4 items-center">
        <img
          className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          src={humedad}
          alt=""
        />
        <p className=" text-[19.2px] drop-shadow-md font-bold md:text-[24px]">
          21°
        </p>
      </div>
      <div className="w-[3px] h-[70px] bg-separador sm:w-[70px] sm:h-[3px]"></div>
      <div className="flex gap-4 items-center">
        <img
          className="w-[20px] h-[20px] md:w-[25px] md:h-[25px]"
          src={precip}
          alt=""
        />
        <p className=" text-[19.2px] drop-shadow-md font-bold md:text-[24px]">
          21°
        </p>
      </div>
    </article>
  );
};

export default CardData;
