import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";
import { useState, useEffect } from "react";
import * as tasksAPI from '../../utilities/tasks-api'

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

  return (
    <main>
      <div className="bg-[#FCDEBE] flex flex-row items-center justify-center" >
        <div className="w-[14vw] h-[90vh] m-[0.4vmin] mr-[1vmin] rounded-lg bg-white border-4 border-[#5e5768] bg-opacity-50  " >
          <TaskLibrary />
        </div>
        <div className="items-center w-[84vw] h-[90vh] m-[1vmin] ml-[0] rounded-[1vmin]">
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
