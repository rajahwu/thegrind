export interface TaskData {
    title: string,
    isComplete: boolean,
    taskNumber?: number
}

export function getTasks() {
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
    return tasks
}