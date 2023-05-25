import React from 'react'
import TaskItem from '../TaskItem/TaskItem'

const tasks = [
  {
    name: 'Chores',
    color: 'blue'
  },
  {
    name: 'Work',
    color: 'red'
  },
  {
    name: 'Lunch',
    color: 'green'
  },
  {
    name: 'Dinner',
    color: 'purple'
  },
  {
    name: 'Free',
    color: 'pink'
  },
  {
    name: 'Social',
    color: 'grey'
  },
]

export default function TaskLibrary() {
  return (
    <>
    <div className='flex flex-col'>
      <div className='text-center pt-[1vh]'>TaskLibrary</div>
      {
        tasks.map((task, idx) => {
          return <div className='flex flex-row justify-between items-center w-[12vw] mx-[1vw] my-[1vh] px-[1vmin] py-[1vmin] border-black border-[.1vmin] rounded-[5px]'>
                    <TaskItem task={task} key={idx}/>
                    <div style={{backgroundColor: task.color}} className='w-[2vmin] h-[2vmin] bg-[slate-500] rounded-[50%]'>

                    </div>
                  </div>
        })
      }
    </div>
    </>
  )
}
