import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";
import { useState, useEffect } from "react";
import * as tasksAPI from '../../utilities/tasks-api'
import Popup from "reactjs-popup";
import NewTaskPopup from "../../components/Popups/NewTaskPopup";

// create a new context for storing taskLibrary state and task state:
import { createContext } from 'react'

export const UserTasks = createContext()


import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import CategoryItemDnD from '../../components/CategoryItem/CategoryItemDnD'


export default function Calendar() {

  // passing the following states to 'UserTasks' context
  const [categories, setCategories] = useState([]);
  const [tasks, setTasks] = useState(null);

  // const [tasks, setTasks] = useState([]);

  // acquiring all tasks inside try statement:
    // const allTasks = await tasksAPI.getTasks();
    // setTasks(allTasks);
    // const updatedDays = [...days]
    // for (let i = 0; i < allTasks.length; i++) {
    //   const thisDate = new Date(allTasks[i].startTime);
    //   const dayOfTheWeek = thisDate.getDay();
    //   // console.log('task: ', tasks[i], 'this date: ', thisDate, 'day of the week: ', dayOfTheWeek)
    //   const dayIndex = (dayOfTheWeek + 6) % 7; // 0 --> 6 % 7 == 6, for sunday //
    //   const dayObj = updatedDays[dayIndex];
    //   if (!dayObj.tasks.find((task) => task.id === allTasks[i].id)) { // this is DUMMY THICC memory intensive so let's find another solution eventually
    //     dayObj.tasks = [...dayObj.tasks, allTasks[i]];
    //   }
    // }
    // setDays(updatedDays);
    // setFetchedTasks(true);

  useEffect(() => {
    async function fetchTaskCategories() {
      try {
        const taskCategories = await tasksAPI.getCategories();
        setCategories(taskCategories);
      } catch (error) {
        console.error('Error fetching the task categories', error);
      }
    }
    
    // async function fetchTasks(){
    //   try {
    //     const allTasks = await tasksAPI.getTasks();
    //     setTasks(allTasks);
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    // async fetch user?

    fetchTaskCategories();
    // fetchTasks();
  }, []); 

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  function handleDragEnd(event) {
    const {active, over} = event;
    console.log('this is active ele',active.id);
    // console.log('this is over ele', over.id);
    
    // pop up prompt to change the time or date of the task
    // 

    // example code for swappping indexes in an array / state
    // if (active.id !== over.id) {
    //   setTasks((tasks) => {
    //     const oldIndex = tasks.indexOf(active.id);
    //     const newIndex = tasks.indexOf(over.id);
    //     console.log('this is oldIndex of active ele', oldIndex);
    //     console.log('this is newIndex of over ele', newIndex);
        
    //     return arrayMove(tasks, oldIndex, newIndex);
    //   });
    // }
  }
    // 0 = 'task library'; 1 = 'Sunday'; 
    // [[],[],[],[],[],[],[],[],[],]

  function handleDragOver(event){
      const {active, over} = event;
      console.log("dragging over")
      console.log('this is over ele', over.id);

  }



  return (
    <UserTasks.Provider
        value={{ categories, setCategories, tasks, setTasks }}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          onDragOver={handleDragOver}

        >
          <main>
          {/* <SortableContext
                items={categories}
                strategy={verticalListSortingStrategy}
              > */}
              <div className="bg-[#FCDEBE] flex flex-row items-center justify-center" >
                <div id='categoryContainer' className=" w-[14vw] h-[90vh] m-[0.4vmin] mr-[1vmin] rounded-lg bg-white border-4 border-[#5e5768] bg-opacity-80  " >
                  <TaskLibrary categories={categories} />
                </div>
                <div className="items-center w-[84vw] h-[90vh] m-[1vmin] ml-[0] rounded-[1vmin]">
                  <WeeklySchedule categories={categories}/>
                </div>
              </div>
            {/* </SortableContext> */}
          </main>
        </DndContext>
    </UserTasks.Provider>
  );
}

