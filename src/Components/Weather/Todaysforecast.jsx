import React, { useState } from 'react'

const Todaysforecast = ({value}) => {

  let time = value.datetime.split(":");
  let todayTime = (time[0]>12?time[0]-12:time[0])+":"+time[1];
  let todayTemp = Math.floor((value.temp-32)*5/9);
  let icon = value.icon;

  return (
    <div className=' w-24 flex flex-col items-center'>
        <h1 className='text-textGrey font-semibold'>{todayTime} {time[0]>12?"PM":"AM"}</h1>

        <img src={`/assets/V1_icons/color/${icon.replace(/-/g,"_")}.svg`} alt="" />
        <h1 className='text-xl font-semibold'>{todayTemp}<sup>o</sup></h1>
    </div>
  )
}

export default Todaysforecast
