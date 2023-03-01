import "./taskItem.scss";

import { FC } from "react";

import { Task } from "../../types";

const TaskItem: FC<{task: Task, onModalClose: () => void}> = (props) => {
  return (
    <div className="task_item_overlay" onClick={props.onModalClose}>
      <div className="task_item_block">
        <p className="task_item_header">{props.task.title}</p>
        <div className="task_item_description">
          <span>Description:</span>
          <br />
          <p>{props.task.description}</p>
        </div>
        <div className="task_item_status">
          Status:
          {props.task.done ? (
            <img className="task_item_image" src='/assets/done_task_icon.png' alt=""></img>
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
