import "./taskCreate.scss";

import { FC, FormEvent, useState } from "react";

import { Input, Error } from '../dumbComponents/index';

const TaskCreate: FC<{onCreateTask: (title: string, description: string) => void}> = (props) => {
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
    setTaskTitle('');
    setTaskDescription('');
  };

  const onTitleInput = (e: FormEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
    setError({
      ...error,
      titleError: false,
    });
  };

  const onDescriptionInput = (e: FormEvent<HTMLInputElement>) => {
    setTaskDescription(e.currentTarget.value);
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

export default TaskCreate;
