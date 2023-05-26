import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";

export default function Calendar() {
  return (
    <main>
      <div className="flex flex-row bg-slate-100">
        <div className="w-[14vw] h-[90vh] m-[1vmin] mr-[1vmin] bg-slate-200 rounded-lg bg-neutral-400 bg-opacity-95">
          <TaskLibrary />
        </div>
        <div className="w-[84vw] h-[90vh] m-[1vmin] ml-[0] bg-slate-400 rounded-[1vmin]">
          <WeeklySchedule />
        </div>
      </div>
    </main>
  );
}
