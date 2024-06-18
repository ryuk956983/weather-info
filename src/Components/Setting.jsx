import React, { useEffect,  useState } from 'react'
import Continent from './Continents/Continent';

const Setting = ({setloading,setlatitude,setlongitude,setcurrentLocation}) => {

  const [continent,setcontinent] =  useState();
  
  
  async function continentFetch(){
    const response = await fetch("./continents.json");
    const data = await response.json();
    setcontinent(data);
    setloading(true);
    

  } 
  
useEffect(() => {
  setloading(false);
 continentFetch();
 
}, [])

  return continent && (
    <div className='text-white w-full overflow-hidden'>
<h1 className='text-4xl tracking-wide mb-4'>World</h1>
<div className='grid grid-cols-2 md:grid-cols-1 gap-4 mb-24'>
{
        continent.continents.map((val,index)=>(
<Continent data={val} key={index} setcurrentLocation={setcurrentLocation} setlatitude={setlatitude} setlongitude={setlongitude}/>
        ))
      }
</div>

     




    </div>
  )
}

export default Setting
