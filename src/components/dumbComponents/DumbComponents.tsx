import { FC } from "react";

export const Error = () => (
  <span className="task_create_error"> Please, complete this field</span>
);

export const Input: FC<{error: boolean, inputType: string, content: string, onChange: (e: any) => void}> = (props) => (
  <input
    type="text"
    className={`task_create_input ${props.error ? "invalid" : ""}`}
    placeholder={`Please, input ${props.inputType}`}
    value={props.content}
    onChange={props.onChange}
  />
);