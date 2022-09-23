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
  const [error, setError] = useState<string>("");

  const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setTask(e.target.value);

  const addNewTask = (): void => {
    if (!task) return setError("Please add a title to the task");

    const newTask: ITask = {
      id: tasks[tasks.length - 1]?.id + 1 || 1,
      title: task,
      type: "incomplete",
    };

    setError("");
    setTask("");
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  const incompletedTasks: Array<ITask> = tasks.filter(
    (task) => task.type === "incomplete"
  );

  const completedTasks: Array<ITask> = tasks.filter(
    (task) => task.type === "completed"
  );

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input
          id="new-task"
          type="text"
          value={task}
          onChange={handleTaskTitleChange}
          className={error && "error"}
        />
        <button onClick={addNewTask}>Add</button>
      </p>

      {error && <div className="error-message">{error}</div>}

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
