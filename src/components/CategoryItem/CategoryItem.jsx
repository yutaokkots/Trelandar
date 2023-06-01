import React from 'react'
;

export default function TaskItem({category}) {
  return <div className=" text-[12px]">{category.name}</div>;
}
