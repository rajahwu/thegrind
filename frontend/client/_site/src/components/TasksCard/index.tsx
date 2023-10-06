import { type TaskData } from "../../../global.types";
import Task from "./Task";

export default function TasksCard({tasks}: {tasks: TaskData[]}) {
    return (
        <div className="w-full sm:w-1/2 xl:w-1/3">
            <div className="mx-0 mb-4 sm:ml-4 xl:mr-4">
                <div className="w-full bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                    <p className="p-4 font-bold text-black text-md dark:text-white">
                        My Tasks
                        <span className="ml-2 text-sm text-gray-500 dark:text-gray-300">
                            {tasks.length.toString().padStart(2, '0')}
                        </span>
                    </p>
                    <ul>
                        {tasks.map((task, index) => <Task key={index} taskNumber={index} title={task.title} isComplete={task.isComplete} />)}
                    </ul>
                </div>
            </div>
        </div>
    )
}