import React from "react";
import Task from "./Task";
import { ITask } from "../interfaces";

interface Props {
  title: string;
  category: string;
  tasks: Array<ITask>;
  handleUpdateTaskType: Function;
  handleDeleteTask: Function;
}

const Category: React.FC<Props> = ({
  title,
  category,
  tasks,
  handleUpdateTaskType,
  handleDeleteTask,
}: Props) => {
  const renderedTasks = tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      handleUpdateTaskTitle={() => {}}
      handleUpdateTaskType={(id: number) => handleUpdateTaskType(id)}
      handleDeleteTask={(id: number) => handleDeleteTask(id)}
    />
  ));
  return (
    <div>
      <h3>{title}</h3>
      <ul id={category}>{renderedTasks}</ul>
    </div>
  );
};

export default Category;
