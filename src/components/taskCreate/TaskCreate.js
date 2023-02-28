import "./taskCreate.scss";

import { useState } from "react";

const TaskCreate = (props) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState({
    titleError: false,
    descriptionError: false,
  });

  const validateInputs = () => {
    if (!taskTitle.trim() || !taskDescription.trim()) {
      setError({
        ...error,
        titleError: !taskTitle.trim(),
        descriptionError: !taskDescription.trim(),
      });
      return false;
    }
    return true;
  };

  const onCreateTask = () => {
    if (!validateInputs()) {
      return;
    }

    props.onCreateTask(taskTitle, taskDescription);
  };

  const onTitleInput = (e) => {
    setTaskTitle(e.target.value);
    setError({
      ...error,
      titleError: false,
    });
  };

  const onDescriptionInput = (e) => {
    setTaskDescription(e.target.value);
    setError({
      ...error,
      descriptionError: false,
    });
  };

  return (
    <div className="task_create">
      <form className="task_create_form">
        <div className="task_create_block">
          <label htmlFor="" className="task_create_label">
            Title:
          </label>
          <Input
            content={taskTitle}
            onChange={onTitleInput}
            inputType={"title"}
            error={error.titleError}
          />
          {error.titleError ? <Error /> : null}
        </div>
        <div className="task_create_block">
          <label htmlFor="" className="task_create_label">
            Description:
          </label>
          <Input
            content={taskDescription}
            onChange={onDescriptionInput}
            inputType={"description"}
            error={error.descriptionError}
          />
          {error.descriptionError ? <Error /> : null}
        </div>

        <button
          type="button"
          className="btn task_create_button"
          onClick={onCreateTask}
        >
          Create
        </button>
      </form>
    </div>
  );
};

const Error = () => (
  <span className="task_create_error"> Please, complete this field</span>
);

const Input = (props) => (
  <input
    type="text"
    className={`task_create_input ${props.error ? "invalid" : ""}`}
    placeholder={`Please, input ${props.inputType}`}
    value={props.content}
    onChange={props.onChange}
  />
);

export default TaskCreate;
