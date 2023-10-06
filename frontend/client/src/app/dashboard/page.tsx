import { type TaskData } from "../../../global.types";
import TasksCard from "@/components/TasksCard";
import Link from "next/link";


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
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/login">Login</Link>
      <Link href="/register">Sign Up</Link>
      <div>
      <TasksCard tasks={tasks} />
      </div>
    </>
  );
}
