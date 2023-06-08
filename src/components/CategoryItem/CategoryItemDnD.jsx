import React from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';

export default function CategoryItemDnD({ category }) {
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
  };

  return (
    <div 
        ref={setNodeRef} 
        className="hover:bg-[#5E5768] hover:text-white flex flex-row justify-between items-center  w-[12vw] mx-[1vw] my-[1vh] px-[1vmin] py-[1vmin] border-black border-[.2vmin] rounded-[5px]"

        style={style} {...attributes} {...listeners}>
    
        <h1>Category DnD</h1>
        <div
            style={{ backgroundColor: category.color }}
            className="w-[2vmin] h-[2vmin] bg-[slate-500] rounded-[50%]"
        ></div>
    
    </div>
  )
}
