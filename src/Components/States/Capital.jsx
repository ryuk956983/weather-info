import React, { useState } from 'react'

const Capital = ({data}) => {
      
  return (
    <div className='bg-greyBlue w-full p-4 rounded-xl cursor-pointer hover:bg-backBlue group '>
        <h1 className='text-white text-2xl font-bold '><span className='truncate w-full'>{data.capital}</span><span className='text-backBlue font-semibold group-hover:text-textGrey'> / {data.name}</span></h1>
        <div>

        </div>
    </div>
  )
}

export default Capital