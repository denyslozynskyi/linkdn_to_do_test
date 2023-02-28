import icon from "../../icons/done_task_icon.png";
import "./taskItem.scss";

import { useState } from "react";

import { tasks } from "../../data/data";
import { useEffect } from "react";

const TaskItem = (props) => {
  const [task, setTask] = useState({});

  useEffect(() => {
    const [task] = tasks.filter((item) => {
      return item.id === props.taskId;
    });

    setTask(task);
  }, [props.taskId]);

  return (
    <div className="task_item_overlay" onClick={props.onModalClose}>
      <div className="task_item_block">
        <p className="task_item_header">{task.title}</p>
        <div className="task_item_description">
          <span>Description:</span>
          <br />
          <p>{task.description}</p>
        </div>
        <div className="task_item_status">
          Status:
          {task.done ? (
            <img className="task_item_image" src={icon} alt=""></img>
          ) : (
            "in process"
          )}
        </div>
        <button className="btn task_item_button" onClick={props.onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
