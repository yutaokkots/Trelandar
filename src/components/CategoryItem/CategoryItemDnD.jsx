import React from 'react'
import {useSortable} from '@dnd-kit/sortable';
import {CSS} from '@dnd-kit/utilities';
import './CategoryItem.css'

export default function CategoryItemDnD({ category }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({id: category.name});

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div 
        id='categoryItem'
        ref={setNodeRef} 
        className="yolo hover:bg-[#5E5768] hover:text-white flex flex-row justify-between items-center  w-[12vw] mx-[1vw] my-[1vh] px-[1vmin] py-[1vmin] border-black border-[.2vmin] rounded-[5px]"

        style={style} {...attributes} {...listeners}>
    
        <h1>{category.name}</h1>
        <div
            style={{ backgroundColor: category.color }}
            className="w-[2vmin] h-[2vmin] bg-[slate-500] rounded-[50%]"
        ></div>
    </div>
  )
}
