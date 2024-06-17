import React, { useState } from 'react'

const Dayforecast = ({value,setcurrentforecast,setcurrentDay}) => {

  let dateArr = value.datetime.split("-");
  let tempmax = Math.floor((value.tempmax-32)*5/9);
  let tempmin = Math.floor((value.tempmin-32)*5/9);
  let dayIcon = value.icon; 
  let back  = true;

  const handleClick = (e)=>{
 setcurrentforecast(value);
 setcurrentDay(value.hours);


  }
  

  const [date,setdate] = useState(dateArr[2]+"/"+dateArr[1]);
  
  return (
    <>
    
    <div className='day7 flex justify-between items-center rounded-xl px-3  hover:bg-backBlue cursor-pointer' onClick={handleClick}>
        <h2 className='text-textGrey tracking-wider '>
            {date}
        </h2>
        <div className='flex gap-4 items-center font-bold tracking-wide'>
            <img src={`./src/assets/V1_icons/color/${dayIcon.replace(/-/g,"_")}.svg`} alt="" className='w-12 mobile:w-16'/>
            <h1 className='mobile:hidden'>{value.conditions}</h1>
        </div>

        <h2 className='text-textGrey tracking-wide'><strong className='text-white'>{tempmax}</strong>/{tempmin}</h2>
    </div>
   
    </>
    
  )
}

export default Dayforecast
