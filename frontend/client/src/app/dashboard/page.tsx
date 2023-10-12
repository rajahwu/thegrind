import { type TaskData } from "../../../global.types";
import TasksCard from "@/components/TasksCard";

const tasks: TaskData[] = [
  {
    title: "Complete assignment",
    isComplete: false,
  },
  {
    title: "Read a book",
    isComplete: true,
  },
  {
    title: "Go for a run",
    isComplete: false,
  },
  {
    title: "Buy groceries",
    isComplete: true,
  },
  {
    title: "Write code",
    isComplete: false,
  },
];

export default function Page() {
  return <TasksCard tasks={tasks} />;
}
