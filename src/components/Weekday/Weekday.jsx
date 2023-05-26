import React from 'react'
import DailySchedule from '../DailySchedule/DailySchedule'

export default function Weekday({day}) {
  return (
    <div className='bg-[#d4d2a5] w-[11.5vw] h-[89vh] mt-[.5vh] mb-[.5vh] p-[.5vmin] bg-[#928779] rounded-[1vmin]'>
        <div className=' text-[14px] text-center text-[#3a445d]'>
            {day}
        </div>
        <button className=' text-[#3a445d] hover:bg-[#CECB88] text-[12px] w-[10.5vw] p-[0.5vw] mt-[.5vmin] border-black border-[.1vmin] rounded-[1vmin]'>
            ADD
        </button>
        <DailySchedule />
    </div>
  )
}
