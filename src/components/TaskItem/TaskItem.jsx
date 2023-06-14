import React from "react";
import {CSS} from '@dnd-kit/utilities';


export default function TaskItem({task, category}) {   

  function convertTime(time){
    const date = new Date(time)
    let hours = date.getHours();
    const ampm = hours >= 12 ? 'pm' : 'am';
    if (hours > 12) {
      hours = hours - 12
    };
    if (hours == 0) {
      hours = 12
    }
    const strTime = hours + ':' + ampm;
    return strTime
  }

  const style = {
    borderColor: category.color
  };

  return (
    <>
      <div
          className="category-element bg-opacity-20 bg-white-900/20 hover:bg-[#5E5768] text-black hover:text-white flex flex-row justify-between items-center w-[10.5vw] my-[1vh] px-[1vmin] py-[1vmin] border-[.2vmin] rounded-[5px] shadow-2xl sm:rounded-lg bg-clip-padding  text-[12px] backdrop-filter backdrop-blur-customsm" 
          style={style}
        >
        <div>
          <div>
              {convertTime(task.startTime)} - { convertTime(task.endTime)}
          </div>
          <div 
            className=" text-[12px]" 
            >
            {task.notes}
          </div>
        </div>
      </div>
    </>
  );
}
