import React from 'react'
import DailySchedule from '../DailySchedule/DailySchedule'
import TaskItem from '../TaskItem/TaskItem'
import './Weekday.css'
export default function Weekday({tasks, day, categories}) {
  return (
    <div className='text-center items-center bg-stripes-black bg-white border-2 border-[#5e5768] bg-opacity-100 w-[11.5vw] h-[89vh]  mb-[.5vh] p-[.5vmin] rounded-lg rounded-[1vmin] pattern-boxes pattern-blue-100 pattern-bg-white pattern-size-6 pattern-opacity-80 '>
        <div className='text-[14px] text-center bg-[#5e5768] text-white '>
            {day}
        </div>
        {/* <button className='text-center items-stretch justify-center hover:bg-[#5E5768] hover:text-white text-[12px] w-[10.5vw] p-[0.5vw] mt-[.5vmin] border-black border-[.2vmin] rounded-[1vmin]'>
            ADD
        </button> */}
        {tasks.map((task, idx) => {
          const category = categories.find((category) => category.id === task.tasktypeId);
          return <div key={idx} style={{borderColor: category.color}} className="category-element  bg-opacity-20 bg-${category.color} bg-white-900/20 hover:bg-[#5E5768] text-black hover:text-white flex flex-row justify-between items-center w-[10.5vw] my-[1vh] px-[1vmin] py-[1vmin] border-[.2vmin] rounded-[5px] shadow-2xl sm:rounded-lg bg-clip-padding  text-[12px] backdrop-filter backdrop-blur-customsm" >
          <TaskItem task={task} key={task.id}/>
          </div>})}
        <DailySchedule />
    </div>
  )
}

