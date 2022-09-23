import React, { useState, useEffect } from "react";
import Category from "./Category";
import { ITask } from "../interfaces";

const App: React.FC = () => {
  const tasks = [
    {
      id: "t1",
      title: "Pay Bills",
      type: "incomplete",
    },
    {
      id: "t2",
      title: "Go Shopping",
      type: "incomplete",
    },
    {
      id: "t3",
      title: "See the Doctor",
      type: "completed",
    },
  ];

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
        <input id="new-task" type="text" />
        <button>Add</button>
      </p>

      <Category
        title="Todo"
        category="incomplete-tasks"
        tasks={incompletedTasks}
      />

      <Category
        title="Completed"
        category="completed-tasks"
        tasks={completedTasks}
      />
    </div>
  );
};

export default App;
