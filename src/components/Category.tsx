import React from "react";
import { ITask } from "../interfaces";

const Category = ({
  title,
  category,
  tasks,
}: {
  title: string;
  category: string;
  tasks: Array<ITask>;
}) => {
  const renderedTasks = tasks.map((task, index) => (
    <li key={index}>
      <input type="checkbox" />
      <label>{task.title}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete">Delete</button>
    </li>
  ));
  return (
    <div>
      <h3>{title}</h3>
      <ul id={category}>{renderedTasks}</ul>
    </div>
  );
};

export default Category;
