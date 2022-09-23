import React from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  handleDeleteTask: Function;
}

const Task: React.FC<Props> = ({ task, handleDeleteTask }: Props) => {
  const deleteTask = (): void => handleDeleteTask(task.id);

  return (
    <li>
      <input type="checkbox" />
      <label>{task.title}</label>
      <input type="text" />
      <button className="edit">Edit</button>
      <button className="delete" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
};

export default Task;
