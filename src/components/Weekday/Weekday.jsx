import React, { useState } from 'react'
import DailySchedule from '../DailySchedule/DailySchedule'
import TaskItem from '../TaskItem/TaskItem'
import './Weekday.css'
import { useDroppable } from '@dnd-kit/core';


export default function Weekday({tasks, day, categories}) {
  const [border, setBorder] = useState(false)
  const {setNodeRef} = useDroppable({
    id: tasks.id // this should be weekday id for each column
  })

  //https://docs.dndkit.com/api-documentation/droppable 
  // https://docs.dndkit.com/api-documentation/droppable/usedroppable

  function handleDragEnd(event){
      const { active, over } = event
      console.log('In the Weekday.jsx, drag end: ', over.id);

  } 

  function handleDragOver(event){
      const { active, over } = event;
      console.log("dragging over")
      console.log('In the Weekday.jsx, drag-over! ', over.id);

} 

  return (
          <div 
              onDragEnd={handleDragEnd}
              onDragOver={handleDragOver}
              ref={setNodeRef}
              className='text-center items-center bg-stripes-black bg-white border-2 border-[#5e5768] bg-opacity-100 w-[11.5vw] h-[89vh]  mb-[.5vh] p-[.5vmin] rounded-lg rounded-[1vmin] pattern-boxes pattern-blue-100 pattern-bg-white pattern-size-6 pattern-opacity-80 '>
                <div className='text-[14px] text-center bg-[#5e5768] text-white '>
                    {day}
                </div>
                {/* <button className='text-center items-stretch justify-center hover:bg-[#5E5768] hover:text-white text-[12px] w-[10.5vw] p-[0.5vw] mt-[.5vmin] border-black border-[.2vmin] rounded-[1vmin]'>
                    ADD
                </button> */}
                    {tasks.map((task, idx) => {
                      const category = categories.find((category) => category.id === task.tasktypeId);
                      return  <div 
                                key={idx} 
                                > 

                                  <TaskItem task={task} key={task.id} category={category}/>
                                
                                </div>
                      })
                    }
                <DailySchedule />
            </div>
  )
}

