import React, { useState, ChangeEvent } from "react";
import Category from "./Category";
import { ITask } from "../interfaces";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Array<ITask>>([
    {
      id: 1,
      title: "Pay Bills",
      checked: false,
    },
    {
      id: 2,
      title: "Go Shopping",
      checked: false,
    },
    {
      id: 3,
      title: "See the Doctor",
      checked: true,
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
      checked: false,
    };

    setError("");
    setTask("");
    setTasks([...tasks, newTask]);
  };

  const updateTaskTitle = (id: number, title: string): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, title };
      return task;
    });
    setTasks(updatedTasks);
  };

  const updateTaskType = (id: number): void => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, checked: !task.checked };
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number): void =>
    setTasks(tasks.filter((task) => task.id !== id));

  const incompletedTasks: Array<ITask> = tasks.filter((task) => !task.checked);

  const completedTasks: Array<ITask> = tasks.filter((task) => !!task.checked);

  return (
    <div className="container">
      <h2>TODO LIST</h2>
      <h3>Add Item</h3>
      <p>
        <input
          id="new-task"
          type="text"
          placeholder="Title"
          value={task}
          onChange={handleTaskTitleChange}
          className={error && "error"}
        />
        <button onClick={addNewTask}>Add</button>
      </p>

      {error && <div className="error-message">{error}</div>}

      {!!incompletedTasks?.length && (
        <Category
          title="Todo"
          category="incomplete-tasks"
          tasks={incompletedTasks}
          handleUpdateTaskTitle={updateTaskTitle}
          handleUpdateTaskType={updateTaskType}
          handleDeleteTask={deleteTask}
        />
      )}

      {!!completedTasks?.length && (
        <Category
          title="Completed"
          category="completed-tasks"
          tasks={completedTasks}
          handleUpdateTaskTitle={updateTaskTitle}
          handleUpdateTaskType={updateTaskType}
          handleDeleteTask={deleteTask}
        />
      )}
    </div>
  );
};

export default App;
