import React from "react";
import "../../index.css";

export const FormUser = (props) => {
  const { onChange, id, error, ...inputProps } = props;
  return (
    <div>
      <input {...inputProps} onChange={onChange} />
      <span>{error}</span>
    </div>
  );
};
