import React, { useEffect, useRef, useState } from "react";
import Searchbar from "./Searchbar";
import Todaysforecast from "./Weather/Todaysforecast";
import { FaTemperatureFull } from "react-icons/fa6";
import { FaWind } from "react-icons/fa";
import { IoRainy } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import Dayforecast from "./Weather/Dayforecast";
import { WiHumidity } from "react-icons/wi";
import { IoEye } from "react-icons/io5";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";


const Weather = ({weatherKey, setloading ,setlatitude,latitude,longitude ,setlongitude,currentLocation , setcurrentLocation}) => {
 
  
  const [weatherData, setweatherData] = useState("");
  const [btnShow, setbtnShow] = useState(false);
  const [currentforecast, setcurrentforecast] = useState();
  const [currentDay , setcurrentDay] = useState();

  const api_key = weatherKey;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude},${longitude}?key=${api_key}`;

  async function fetchApi() {
  setloading(false);
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    setloading(true);
    setweatherData(data);
    setcurrentforecast(data.currentConditions)
   setcurrentDay(data.days[0].hours);
  }

  useEffect(() => {
    
    fetchApi();
  }, [url]);
  
  let icon = weatherData && currentforecast.icon;
  let sunrise = weatherData && currentforecast.sunrise.split(":");
  let sunset = weatherData && currentforecast.sunset.split(":");

  let seemoreArr = [
    {
      head: "Humidity",
      info: weatherData && currentforecast.humidity + "%",
      icon: <WiHumidity />,
    },
    {
      head: "Visibility",
      info: weatherData && currentforecast.visibility + " km",
      icon: <IoEye />,
    },
    {
      head: "Sunrise",
      info: sunrise[0] + ":" + sunrise[1],
      icon: <FiSunrise />,
    },
    {
      head: "Sunset",
      info: sunset[0] + ":" + sunset[1],
      icon: <FiSunset />,
    },
  ];
  return (
    <>
      <main className="w-full h-max overflow-hidden flex text-white gap-4 mobile:flex-col md:flex-col ">
        <section className=" flex flex-col gap-4 flex-[5]">
          <Searchbar
            setlatitude={setlatitude}
            setlongitude={setlongitude}
            setcurrentLocation={setcurrentLocation}
          />

          <div className="flex justify-between  w-full overflow-hidden max-h-[200px] mobile:max-h-[220px]">
            <div className="flex-1">
              <h1 className="text-4xl font-bold truncate mobile:w-[50vw]">
                {currentLocation}
              </h1>
              <h3 className="text-textGrey mt-4">
                Rain: {currentforecast?.precip ?? "0"}%
              </h3>
              <h1 className="text-5xl font-bold self-end mt-10 font-bar">
                {weatherData &&
                  Math.floor(
                    ((currentforecast.temp - 32) * 5) / 9
                  )}
                <sup>o</sup>
                <span className="text-textGrey ml-2 text-3xl">C</span>
              </h1>
            </div>
            <div className="flex-1">
              <img
                src={`./src/assets/V1_icons/color/${icon.replace(
                  /-/g,
                  "_"
                )}.svg`}
                alt="img"
                className="w-full  h-full"
              />
            </div>
          </div>

          {/* second div */}
          <div className="grid gap-4 h-full">
            <div className="w-full p-4 bg-greyBlue rounded-xl grid gap-2">
              <h1 className="text-textGrey font-bold tracking-wide">
                TODAY'S FORECAST
              </h1>
              <div
                className={`flex justify-around h-[0px]  mobile:overflow-y-scroll gap-y-4 flex-wrap ${
                  !btnShow && "h-[145px] mobile:h-[345px]"
                } overflow-hidden transition-all delay-100 ease-in-out `}
              >
                {weatherData &&
                  currentDay.map(
                    (val, ind) =>
                      (ind == 5 ||
                        ind == 9 ||
                        ind == 13 ||
                        ind == 16 ||
                        ind == 19 ||
                        ind == 23) && <Todaysforecast key={ind} value={val} />
                  )}
              </div>
            </div>

            {/* third div */}
            <div className="w-full p-4 bg-greyBlue rounded-xl flex flex-col gap-3 ">
              <h1 className="text-textGrey font-bold tracking-wide flex justify-between">
                AIR CONDITIONS
                <span>
                  <button
                    onClick={() => {
                      setbtnShow(!btnShow);
                    }}
                    className="bg-btnBlue transition-all delay-150 ease-in-out text-white font-normal px-2 text-sm rounded-xl coursor-pointer py-[1.5px]"
                  >
                    See {btnShow ? "less" : "more"}
                  </button>
                </span>
              </h1>
              <div>
                <ul className="grid grid-cols-2 gap-5">
                  <li className="flex gap-4 text-3xl items-center">
                    <FaTemperatureFull />
                    <div>
                      <h2 className="text-textGrey text-lg font-semibold">
                        Real Feel
                      </h2>
                      <h1 className="text-2xl font-bold">
                        {weatherData &&
                          Math.floor(
                            ((currentforecast.feelslike - 32) *
                              5) /
                              9
                          )}
                        <sup>o</sup>
                      </h1>
                    </div>
                  </li>
                  <li className="flex gap-4 text-3xl items-center">
                    <FaWind />
                    <div>
                      <h2 className="text-textGrey text-lg font-semibold">
                        Wind
                      </h2>
                      <h1 className="text-2xl font-bold">
                        {weatherData && currentforecast.windspeed}{" "}
                        km/h
                      </h1>
                    </div>
                  </li>
                  <li className="flex gap-4 text-3xl items-center">
                    <IoRainy />
                    <div>
                      <h2 className="text-textGrey text-lg font-semibold">
                        Rain
                      </h2>
                      <h1 className="text-2xl font-bold">
                        {currentforecast?.precip ?? "0"}%
                      </h1>
                    </div>
                  </li>
                  <li className="flex gap-4 text-3xl items-center">
                    <MdSunny />
                    <div>
                      <h2 className="text-textGrey text-lg font-semibold">
                        UV Index
                      </h2>
                      <h1 className="text-2xl font-bold">
                        {weatherData && currentforecast.uvindex}
                      </h1>
                    </div>
                  </li>
                </ul>
              </div>

              <div
                className={`seeMore h-[0px] ${
                  btnShow && "h-[135px]"
                }  transition-all delay-100 ease-in-out overflow-hidden mt-2.5 ${btnShow && "mb-2.5"}`}
              >
                <ul className="grid grid-cols-2 gap-4">
                  {seemoreArr.map((el, ind) => (
                    <li className="flex gap-4 text-3xl items-center" key={ind}>
                      {el.icon}{" "}
                      <div>
                        <h2 className="text-textGrey text-lg font-semibold">
                          {el.head}
                        </h2>
                        <h1 className="text-2xl font-bold">{el.info}</h1>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/*second section */}

        <section className="flex-[2] bg-greyBlue rounded-xl flex flex-col p-4 min-w-[300px]">
          <h1 className="text-textGrey font-bold tracking-wide">
            7-Day Forecast
          </h1>
          <div className="my-4 grid grid-rows-7 h-full px-2 gap-4">
            {weatherData &&
              weatherData.days.map((el, ind) => ind < 7 && <Dayforecast value={el} key={ind} setcurrentforecast={setcurrentforecast} setcurrentDay={setcurrentDay}/>
              )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Weather;
