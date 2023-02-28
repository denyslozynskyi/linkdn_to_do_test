import "./app.scss";

import { tasks as initialTasks } from "../../data/data";

import { useState } from "react";

import TaskCreate from "../taskCreate/TaskCreate";
import TaskList from "../taskList/TaskList";
import TaskItem from "../taskItem/TaskItem";

const App = () => {
  const [modalOpen, setModalOpen] = useState({ open: false, taskId: 0 });
  const [tasks, setTasks] = useState(initialTasks);

  const onCreateTask = (title, description) => {
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      done: false,
    };

    setTasks([...tasks, newTask]);
  };

  const onTaskDone = (id) => {
    const newTasks = tasks.map((el) => {
      if (el.id === id) {
        el.done = true;
      }
      return el;
    });

    setTasks([...newTasks]);
  };

  const onModalOpen = (id) => {
    setModalOpen({
      ...modalOpen,
      open: true,
      taskId: id,
    });
  };

  const onModalClose = () => {
    setModalOpen({
      ...modalOpen,
      open: false,
      taskId: 0,
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
        <TaskItem taskId={modalOpen.taskId} onModalClose={onModalClose} />
      ) : null}
    </>
  );
};

export default App;
