import React, { useState, ChangeEvent } from "react";
import { ITask } from "../interfaces";

interface Props {
  task: ITask;
  handleUpdateTaskTitle: (id: number, title: string) => void;
  handleUpdateTaskType: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

const Task: React.FC<Props> = ({
  task,
  handleUpdateTaskTitle,
  handleUpdateTaskType,
  handleDeleteTask,
}: Props) => {
  const [taskTitle, setTaskTitle] = useState<string>(task.title);
  const [editMode, setEditMode] = useState<boolean>(false);

  const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>): void =>
    setTaskTitle(e.target.value);

  const updateTaskTitle = (): void => {
    setEditMode(!editMode);
    handleUpdateTaskTitle(task.id, taskTitle);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={(): void => handleUpdateTaskType(task.id)}
      />

      {editMode ? (
        <input
          type="text"
          name="task-title"
          value={taskTitle}
          onChange={handleTaskTitleChange}
        />
      ) : (
        <label>{taskTitle}</label>
      )}

      <button className="edit" onClick={updateTaskTitle}>
        {!editMode ? "Edit" : "Confirm"}
      </button>

      <button
        className="delete"
        onClick={(): void => handleDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
