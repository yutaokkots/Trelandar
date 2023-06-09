import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";
import { useState, useEffect } from "react";
import * as tasksAPI from '../../utilities/tasks-api'

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

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchTaskCategories() {
      try {
        const taskCategories = await tasksAPI.getCategories();
        setCategories(taskCategories);
      } catch (error) {
        console.error('Error fetching the task categories', error);
      }
    }
    
    // async fetch user?

    fetchTaskCategories();
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )
    // 0 = 'task library'; 1 = 'Sunday'; 
    // [[],[],[],[],[],[],[],[],[],]

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >




      <main>
      {/* <SortableContext
            items={categories}
            strategy={verticalListSortingStrategy}
          > */}
          <div className="bg-[#FCDEBE] flex flex-row items-center justify-center" >
            <div className=" w-[14vw] h-[90vh] m-[0.4vmin] mr-[1vmin] rounded-lg bg-white border-4 border-[#5e5768] bg-opacity-80  " >
              <TaskLibrary categories={categories} />
            </div>
            <div className="items-center w-[84vw] h-[90vh] m-[1vmin] ml-[0] rounded-[1vmin]">
              <WeeklySchedule categories={categories}/>
            </div>
          </div>
        {/* </SortableContext> */}
      </main>
    </DndContext>
  );
}

function handleDragEnd(event) {
  const {active, over} = event;
  
  if (active.id !== over.id) {
    setItems((items) => {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      
      return arrayMove(items, oldIndex, newIndex);
    });
  }
}