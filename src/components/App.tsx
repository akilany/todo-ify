import React, { useState, useEffect, ChangeEvent } from "react";
import Category from "./Category";
import { ITask } from "../interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Array<ITask>>([
    {
      id: 1,
      title: "Pay Bills",
      type: "incomplete",
    },
    {
      id: 2,
      title: "Go Shopping",
      type: "incomplete",
    },
    {
      id: 3,
      title: "See the Doctor",
      type: "completed",
    },
  ]);

  const incompletedTasks: Array<ITask> = tasks.filter(
    (task) => task.type === "incomplete"
  );

  const completedTasks: Array<ITask> = tasks.filter(
    (task) => task.type === "completed"
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const addNewTask = (): void => {
    const newTask: ITask = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      title: task,
      type: "incomplete",
    };

    setTask("");
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input id="new-task" type="text" value={task} onChange={handleChange} />
        <button onClick={addNewTask}>Add</button>
      </p>

      <Category
        title="Todo"
        category="incomplete-tasks"
        tasks={incompletedTasks}
        handleDeleteTask={deleteTask}
      />

      <Category
        title="Completed"
        category="completed-tasks"
        tasks={completedTasks}
        handleDeleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
