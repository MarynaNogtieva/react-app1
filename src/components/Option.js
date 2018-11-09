import React from 'react';

export const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};