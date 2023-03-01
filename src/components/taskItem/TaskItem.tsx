import "./taskItem.scss";

import DoneIcon from "../../assets/done_task_icon.png";

import { TaskItemProps } from "../../types";

const TaskItem = ({ task, onModalClose }: TaskItemProps) => {
  return (
    <div className="task_item_overlay" onClick={onModalClose}>
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
            <img className="task_item_image" src={DoneIcon} alt=""></img>
          ) : (
            "in process"
          )}
        </div>
        <button className="btn task_item_button" onClick={onModalClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
