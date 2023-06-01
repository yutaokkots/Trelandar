import React from 'react'
import DailySchedule from '../DailySchedule/DailySchedule'
import TaskItem from '../TaskItem/TaskItem'

export default function Weekday({tasks, day}) {
  return (
    <div className='text-center items-center bg-white border-2 border-[#5e5768] bg-opacity-50 w-[11.5vw] h-[89vh]  mb-[.5vh] p-[.5vmin] rounded-lg rounded-[1vmin]'>
        <div className='text-[14px] text-center bg-[#5e5768] text-white'>
            {day}
        </div>
        <button className='text-center items-stretch justify-center hover:bg-[#5E5768] hover:text-white text-[12px] w-[10.5vw] p-[0.5vw] mt-[.5vmin] border-black border-[.2vmin] rounded-[1vmin]'>
            ADD
        </button>
        {tasks.map((task, key) => <TaskItem task={task} key={task.id}/>)}
        <DailySchedule />
    </div>
  )
}

