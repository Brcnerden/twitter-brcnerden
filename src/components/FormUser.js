import React from 'react';

export const FormUser = (props) => {
  const { id, error, errorText, ...inputProps } = props;

  return (
    <div>
      <input {...inputProps} />
      {error && <span>{errorText}</span>}
    </div>
  );
};
