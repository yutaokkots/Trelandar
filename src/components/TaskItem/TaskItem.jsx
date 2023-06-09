import React from "react";
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';


export default function TaskItem({task, category}) {

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: category.id});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    borderColor: category.color
  };


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

  return (
    <>
      <div
          ref={setNodeRef} 
          className="category-element bg-opacity-20 bg-${category.color} bg-white-900/20 hover:bg-[#5E5768] text-black hover:text-white flex flex-row justify-between items-center w-[10.5vw] my-[1vh] px-[1vmin] py-[1vmin] border-[.2vmin] rounded-[5px] shadow-2xl sm:rounded-lg bg-clip-padding  text-[12px] backdrop-filter backdrop-blur-customsm" 
          style={style} {...attributes} {...listeners}
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
