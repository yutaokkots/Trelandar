import React from "react";

export default function TaskItem({task}) {
  return <div className=" text-[12px]">{task.name}</div>;
}
