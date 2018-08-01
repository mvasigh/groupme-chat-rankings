import React from 'react';

const ButtonSelectGroup = ({ options = [], onSelect = fn => fn }) => {
  const renderButtons = () => {
    return options.map((option, i) => (
      <p key={i} className="control">
        <a
          className="button"
          onClick={() => onSelect(option)}
          style={{ textTransform: 'capitalize' }}
        >
          {option}
        </a>
      </p>
    ));
  };

  return <div className="field has-addons">{renderButtons()}</div>;
};

export default ButtonSelectGroup;
