import React, { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaCity } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { TbWorld } from "react-icons/tb";
import { FaUmbrella } from "react-icons/fa";

const Sidebar = ({setloading}) => {

const [show,setshow] = useState(false);

Array.from(document.getElementsByTagName("a")).forEach(el=>{
  el.addEventListener("click",()=>{
    
setshow(false);
  })
})

  return (
    <div className="bg-greyBlue mobile:w-full w-20 rounded-xl flex flex-col items-center p-5 mobile:justify-between ">
      <div className="flex justify-between w-full">
        <FaUmbrella className="text-white text-2xl w-full mobile:w-auto"/>
        <div className="text-white text-2xl hidden mobile:block" onClick={()=>{setshow(!show)}}>
          <GiHamburgerMenu />
        </div>
      </div>
      <ul className={`flex flex-col gap-10  text-textGrey ${show?"mobile:h-[330px]":"mobile:h-0"} overflow-hidden transition-all ease-in-out delay-250 `}>
        <li className="cursor-pointer  mt-10">
          <Link to=""
            className="navfocus flex flex-col items-center justify-center hover:text-white focus:text-white "
            href="#"
          >
            <TiWeatherCloudy />
            Weather
          </Link>
        </li>
        <li className="cursor-pointer ">
          <Link to="/states"
            className="navfocus flex flex-col items-center justify-center hover:text-white focus:text-white "
            href="#"
          >
            <FaCity />
            States
          </Link >
        </li>
        <li className="cursor-pointer  ">
          <Link 
          to="/map"
            className="navfocus flex flex-col items-center justify-center hover:text-white focus:text-white "
            href="#"
          >
            <FaMap />
            Map
          </Link >
        </li>
        <li className="cursor-pointer  ">
          <Link
          to="/setting"
            className="navfocus flex flex-col items-center justify-center hover:text-white focus:text-white "
            href="#"
          >
            <TbWorld />
            World
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
