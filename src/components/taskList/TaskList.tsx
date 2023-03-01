import "./taskList.scss";

import DoneIcon from "../../assets/done_task_icon.png";

import { ITask, TaskListProps } from "../../types";
import { trimText } from "../../heplers";

const TaskList = ({tasks, onTaskDone, onModalOpen}: TaskListProps) => {
  const taskList = tasks;

  const onDoneClick = (taskId: number) => {
    onTaskDone(taskId);
  };

  const renderTasks = () => {
    const tasks = taskList.map((task: ITask) => {
      return (
        <div className="task_list_row" key={task.id}>
          <div
            className="task_list_row_item pointer"
            onClick={() => onModalOpen(task.id)}
          >
            {task.id}
          </div>
          <div
            className="task_list_row_item pointer"
            onClick={() => onModalOpen(task.id)}
          >
            {trimText(task.title)}
          </div>
          <div className="task_list_row_item">{trimText(task.description)}</div>
          <div className="task_list_row_item">
            {task.done ? (
              <img className="task_list_item_image" src={DoneIcon} alt=""></img>
            ) : (
              <button
                className="btn task_list_item_button"
                onClick={() => onDoneClick(task.id)}
              ></button>
            )}
          </div>
        </div>
      );
    });

    return tasks;
  };

  return (
    <div className="task_list">
      <div className="task_list_header">
        <div className="task_list_header_item">id</div>
        <div className="task_list_header_item">title</div>
        <div className="task_list_header_item">description</div>
        <div className="task_list_header_item">status</div>
      </div>
      <div className="task_list_items">{renderTasks()}</div>
    </div>
  );
};

export default TaskList;
