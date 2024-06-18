import React, { useState } from "react";
import { Link } from "react-router-dom";


const Continent = ({ data, setlatitude, setlongitude, setcurrentLocation }) => {
  const [showlist, setshowlist] = useState(false);

  const setcountry = (el) => {
      setlatitude(el.latitude);
      setlongitude(el.longitude);
      setcurrentLocation(el.name);
      
    };

    const [countrySearch , setcountrySearch] = useState("");

  useState(false);
  return (
    <div className={`bg-greyBlue p-4 rounded-xl flex flex-col gap-4 relative ${showlist && "rounded-b-none"} h-32`}>
      <h1 className="text-2xl tracking-wide">{data.name}</h1>
      <div className="w-full">
        <input
          type="text"
          className="relative w-full bg-transparent border-b-2 py-2 outline-none"
          placeholder="Search"
        onClick={()=>{setshowlist(!showlist)}} onChange={(e)=>{setcountrySearch(e.target.value)}}/>
     <ul className={`mt-4 text-xl flex z-10 p-4 rounded-xl rounded-t-none  flex-col gap-4 absolute bg-greyBlue w-full left-0 ${!showlist && "hidden"} max-h-[30vh] overflow-y-auto shadow-black shadow-md` }>
       {data.countries.filter( val => val.name.toLowerCase().includes(countrySearch)).map((el,ind)=>(
        
        <Link to="/" key={ind} ><li onClick={()=>{setcountry(el)}} >{el.name}</li></Link>
       ))}
     </ul>
          
       
      </div>
    </div>
  );
};

export default Continent;
