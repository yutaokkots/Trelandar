import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";

export default function Calendar() {
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
