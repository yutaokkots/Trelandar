import React from "react";
import TaskLibrary from "../../components/TaskLibrary/TaskLibrary";
import WeeklySchedule from "../../components/WeeklySchedule/WeeklySchedule";

export default function Calendar() {
  return (
    <div>
      <h1>Rending MAIN Calendar PAGE</h1>
      <WeeklySchedule />
      <TaskLibrary />
    </div>
  );
}
