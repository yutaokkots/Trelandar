import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";

export default function Calendar() {
  return (
    <>
    <div className="flex flex-row bg-[#fcdebe]">
      <div className="border-4 border-[#5E5768] bg-[#D4D2A5] w-[14vw] h-[90vh] m-[1vmin] mr-[1vmin] border-black border-[.1vmin] ">
      <TaskLibrary />
      </div>
      <div className="w-[84vw] h-[90vh] m-[1vmin] ml-[0]  rounded-[1vmin]">
      <WeeklySchedule />
      </div>
    </div>
    </>
  );
}
