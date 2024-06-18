import React, { useState } from "react";
import Sidebar from "./Components/Sidebar";
import Weather from "./Components/Weather";
import Loader from "./Components/Loader/Loader";
import { Routes, Route } from "react-router-dom";
import States from "./Components/States";
import Map from './Components/Map';
import Setting from "./Components/Setting";

const App = () => {
  const [loading, setloading] = useState(false);
  const [latitude, setlatitude] = useState("28.631");
  const [longitude, setlongitude] = useState("77.2172");
  const [currentLocation, setcurrentLocation] = useState("New Delhi");

  let weatherApi = import.meta.env.VITE_WEATHER_KEY;

  return (
    <>
      <div className=" min-h-screen">
        <div
          className={`fixed top-0 w-full h-screen bg-greyBlue grid place-items-center z-50 ${
            loading && "hidden"
          }`}
        >
          <Loader />
        </div>
        <div className="bg-backBlue w-full h-full p-4 flex flex-row gap-6 md:flex-col">
          <Sidebar setloading={setloading}/>
          <Routes>
            <Route path="/" element={<Weather weatherKey={weatherApi} setloading={setloading} setlatitude={setlatitude} setlongitude={setlongitude} latitude={latitude} longitude={longitude} currentLocation={currentLocation} setcurrentLocation={setcurrentLocation}/>} />
            <Route path="/states" element={<States setloading={setloading} setlatitude={setlatitude} setlongitude={setlongitude} setcurrentLocation={setcurrentLocation}/>} />
            <Route path="/map" element={<Map setloading={setloading} setlatitude={setlatitude} setlongitude={setlongitude} latitude={latitude} longitude={longitude} setcurrentLocation={setcurrentLocation}/> } />
            <Route path="/setting" element={<Setting setloading={setloading} setlatitude={setlatitude} setlongitude={setlongitude} setcurrentLocation={setcurrentLocation}/> } />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
