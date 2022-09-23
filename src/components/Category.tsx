import React from "react";
import Task from "./Task";
import { ITask } from "../interfaces";

interface Props {
  title: string;
  categoryName?: string;
  tasks: Array<ITask>;
  handleUpdateTaskTitle: Function;
  handleUpdateTaskType: Function;
  handleDeleteTask: Function;
}

const Category: React.FC<Props> = ({
  title,
  categoryName,
  tasks,
  handleUpdateTaskTitle,
  handleUpdateTaskType,
  handleDeleteTask,
}: Props) => {
  const renderedTasks = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleUpdateTaskTitle={(id: number, title: string) =>
        handleUpdateTaskTitle(id, title)
      }
      handleUpdateTaskType={(id: number) => handleUpdateTaskType(id)}
      handleDeleteTask={(id: number) => handleDeleteTask(id)}
    />
  ));

  return (
    <React.Fragment>
      <h3>{title}</h3>
      <ul id={categoryName}>{renderedTasks}</ul>
    </React.Fragment>
  );
};

export default Category;
