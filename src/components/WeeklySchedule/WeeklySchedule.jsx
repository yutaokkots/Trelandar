import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import Weekday from '../Weekday/Weekday'

export default function WeeklySchedule() {

  const days = [
    'Monday',
    'Tuesday',
    'Wendesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  return (
    <>
    <div className=' flex flex-row justify-evenly'>
      {days.map((day, idx) => <Weekday day={day} key={idx}/>
      )}
    </div>
    </>
  )
}
