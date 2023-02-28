import "./taskList.scss";
import icon from "../../icons/done_task_icon.png";

const TaskList = (props) => {
  const taskList = props.tasks;

  const trimText = (text) => {
    return text.length > 20 ? text.slice(0, 20) + "..." : text;
  };

  const onDoneClick = (taskId) => {
    props.onTaskDone(taskId);
  };

  const renderTasks = () => {
    const tasks = taskList.map((task) => {
      return (
        <div className="task_list_row" key={task.id}>
          <div
            className="task_list_row_item pointer"
            onClick={() => props.onModalOpen(task.id)}
          >
            {task.id}
          </div>
          <div
            className="task_list_row_item pointer"
            onClick={() => props.onModalOpen(task.id)}
          >
            {trimText(task.title)}
          </div>
          <div className="task_list_row_item">{trimText(task.description)}</div>
          <div className="task_list_row_item">
            {task.done ? (
              <img className="task_list_item_image" src={icon} alt=""></img>
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
