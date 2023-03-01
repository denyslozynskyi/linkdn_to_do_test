import "./app.scss";

import { tasks as initialTasks } from "../../data/data";

import { useState } from "react";

import TaskCreate from "../taskCreate/TaskCreate";
import TaskList from "../taskList/TaskList";
import TaskItem from "../taskItem/TaskItem";

const App = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalOpen, setModalOpen] = useState({ open: false, task: tasks[0] });

  const onCreateTask = (title: string, description: string) => {
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const onTaskDone = (id: number) => {
    const newTasks = tasks.map((el) => {
      if (el.id === id) {
        el.done = true;
      }
      return el;
    });

    setTasks([...newTasks]);
  };

  const onModalOpen = (id: number) => {
    const task = tasks.find(el => {
      return el.id === id;
    })!;
    setModalOpen({
      ...modalOpen,
      open: true,
      task,
    });
  };

  const onModalClose = () => {
    setModalOpen({
      ...modalOpen,
      open: false,
      task: tasks[0]
    });
  };

  return (
    <>
      <div className="container">
        <TaskCreate onCreateTask={onCreateTask} />
        <hr />
        <TaskList
          tasks={tasks}
          onTaskDone={onTaskDone}
          onModalOpen={onModalOpen}
        />
      </div>
      {modalOpen.open ? (
        <TaskItem task={modalOpen.task} onModalClose={onModalClose} />
      ) : null}
    </>
  );
};

export default App;
