import React from "react";
import "../../index.css";

export const FormUser = (props) => {
  const { id, error, values, ...inputProps } = props;
  return (
    <div>
      <input {...inputProps} />
      {values ? " " : <span>{error} </span>}
    </div>
  );
};
