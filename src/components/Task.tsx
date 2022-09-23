import React, { useState, ChangeEvent } from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  handleUpdateTaskTitle: Function;
  handleUpdateTaskType: Function;
  handleDeleteTask: Function;
}

const Task: React.FC<Props> = ({
  task,
  handleUpdateTaskTitle,
  handleUpdateTaskType,
  handleDeleteTask,
}: Props) => {
  const updateTaskTitle = (): void => {};

  const updateTaskType = (): void => handleUpdateTaskType(task.id);

  const deleteTask = (): void => handleDeleteTask(task.id);

  return (
    <li>
      <input type="checkbox" checked={task.checked} onChange={updateTaskType} />
      <label>{task.title}</label>
      <input type="text" value={task.title} onChange={updateTaskTitle} />
      <button className="edit">Edit</button>
      <button className="delete" onClick={deleteTask}>
        Delete
      </button>
    </li>
  );
};

export default Task;
