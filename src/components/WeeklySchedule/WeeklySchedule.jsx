import React from "react";
import TaskItem from "../TaskItem/TaskItem";
import Weekday from "../Weekday/Weekday";
import { useState, useEffect } from "react";
import * as tasksAPI from "../../utilities/tasks-api";

// from datetime import date

export default function WeeklySchedule({ categories }) {
  const weekdayNames = [
    "Monday",
    "Tuesday",
    "Wendesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [days, setDays] = useState([
    {
      day: "Monday",
      tasks: [],
    },
    {
      day: "Tuesday",
      tasks: [],
    },
    {
      day: "Wednesday",
      tasks: [],
    },
    {
      day: "Thursday",
      tasks: [],
    },
    {
      day: "Friday",
      tasks: [],
    },
    {
      day: "Saturday",
      tasks: [],
    },
    {
      day: "Sunday",
      tasks: [],
    },
  ]);

  const [fetchedTasks, setFetchedTasks] = useState(false);

  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    async function getAllTasks() {
      try {
        const allTasks = await tasksAPI.getTasks();
        setTasks(allTasks);
        const updatedDays = [...days];
        for (let i = 0; i < allTasks.length; i++) {
          const thisDate = new Date(allTasks[i].startTime);
          const dayOfTheWeek = thisDate.getDay();
          // console.log('task: ', tasks[i], 'this date: ', thisDate, 'day of the week: ', dayOfTheWeek)
          const dayIndex = (dayOfTheWeek + 6) % 7; // 0 --> 6 % 7 == 6, for sunday //
          const dayObj = updatedDays[dayIndex];
          if (!dayObj.tasks.find((task) => task.id === allTasks[i].id)) {
            // this is DUMMY THICC memory intensive so let's find another solution eventually
            dayObj.tasks = [...dayObj.tasks, allTasks[i]];
          }
        }
        setDays(updatedDays);
        setFetchedTasks(true);
      } catch (err) {
        console.log(err);
      }
    }
    getAllTasks(); //hahasdfasfsf
  }, []);

  // useEffect(() => {
  //   console.log('days 3: ', days)
  // }, [days])

  return (
    <>
      <div className=" flex flex-row justify-evenly">
        {!fetchedTasks ? (
          <div className="mt-80">
            <img
              className="h-60"
              src="https://res.cloudinary.com/diw7vmgum/image/upload/v1687211240/loading-animation_jckhrz.gif"
            />{" "}
          </div>
        ) : (
          <>
            {days.map((day, idx) => (
              <Weekday
                tasks={day.tasks}
                categories={categories}
                day={day.day}
                key={idx}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
}
