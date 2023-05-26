import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";

export default function Calendar() {
  return (
    <main>
      <div className="bg-[#FCDEBE] flex flex-row" >
        <div className="w-[14vw] h-[90vh] m-[1vmin] mr-[1vmin] bg-slate-300 rounded-lg bg-opacity-50 " >
          <TaskLibrary />
        </div>
        <div className="w-[84vw] h-[90vh] m-[1vmin] ml-[0] bg-slate-400 rounded-[1vmin]">
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
