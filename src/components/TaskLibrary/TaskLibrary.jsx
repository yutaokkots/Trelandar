import React from "react";
import TaskItem from "../TaskItem/TaskItem";

const tasks = [
  {
    name: "Chores",
    color: "#9BAADD",
  },
  {
    name: "Work",
    color: "#95DBDA",
  },
  {
    name: "Lunch",
    color: "#EAB0E3",
  },
  {
    name: "Dinner",
    color: "#F0A8A8",
  },
  {
    name: "Free",
    color: "#9AE3B7",
  },
  {
    name: "Social",
    color: "#E6CDA3",
  },
];

const dummy_taskCategories = [
  
]

export default function TaskLibrary() {
  return (
    <>
      <div className="flex flex-col items-center h-[90vh]">
        <div className="flex justify-between items-center px-6 py-3">
        <h2 className="flex items-center text-center">TaskLibrary</h2>
        <button>
        <img className="h-6" src="https://res.cloudinary.com/diw7vmgum/image/upload/v1685131977/plus_fftfrp.png" />
        </button>
        </div>
        {tasks.map((task, idx) => {
          return (
            <div
              key={idx}
              className="hover:bg-[#5E5768] hover:text-white flex flex-row justify-between items-center  w-[12vw] mx-[1vw] my-[1vh] px-[1vmin] py-[1vmin] border-black border-[.2vmin] rounded-[5px]"
            >
              <TaskItem task={task} />
              <div
                style={{ backgroundColor: task.color }}
                className="w-[2vmin] h-[2vmin] bg-[slate-500] rounded-[50%]"
              ></div>
            </div>
          );
        })}
      </div>
    </>
  );
}
