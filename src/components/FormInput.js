import React from "react";

const FormInput = (props) => {
  const { id, error, errorText, ...inputProps } = props;

  return (
    <div>
      <input {...inputProps} />
      {error && <span className="error">{errorText}</span>}
    </div>
  );
};

export default FormInput;
