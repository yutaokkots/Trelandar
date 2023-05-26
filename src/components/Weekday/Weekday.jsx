import React from 'react'
import DailySchedule from '../DailySchedule/DailySchedule'

export default function Weekday({day}) {
  return (
    <div className='border-4 border-[#5E5768] w-[11.5vw] h-[89vh] mt-[.5vh] mb-[.5vh] p-[.5vmin] rounded-lg  rounded-[1vmin] '>
        <div className='bg-[#5E5768] text-[14px] text-center text-white'>
            {day}
        </div>
        {/* <button className='text-[12px] w-[10.5vw] p-[.5vw] mt-[.5vmin] border-2 border-[#5E5768] border-[.1vmin] rounded-[1vmin]'>
            ADD
        </button> */}
        <DailySchedule />
    </div>
  )
}
