"use client";
import { useState } from "react";
import { TaskData } from "../../../global.types";

export default function Task({ title, isComplete, taskNumber }: TaskData) {
  const [taskCompleted, setTaskCompleted] = useState(isComplete);

  const taskClassName = taskCompleted
    ? "flex items-center justify-between py-3 text-gray-400 border-b-2 border-gray-100 hover:bg-slate-300 dark:border-gray-800"
    : "flex items-center justify-between py-3 text-gray-600 border-b-2 border-gray-100 hover:bg-slate-300 dark:text-gray-200 dark:border-gray-800";

  const paddedTaskNumber = taskNumber?.toString().padStart(2, "0");
  return (
    <li
      className={taskClassName}
      onClick={() => setTaskCompleted(!taskCompleted)}
    >
      <div className="flex items-center justify-start text-sm">
        <span className="mx-4">{paddedTaskNumber}</span>
        <span className={taskCompleted ? "line-through" : ""}>{title}</span>
      </div>
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="mx-4 text-gray-400 dark:text-gray-300"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
          fill="currentColor"
          className={taskCompleted ? "mx-4 text-green-500" : ""}
        ></path>
        <path
          className={taskCompleted ? "mx-4 text-green-500" : ""}
          d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
          fill="currentColor"
        ></path>
      </svg>
    </li>
  );
}
