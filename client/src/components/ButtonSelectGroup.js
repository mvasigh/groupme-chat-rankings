import React from 'react';

const ButtonSelectGroup = ({ options = [], active, onSelect = fn => fn }) => {
  const renderButtons = () => {
    return options.map((option, i) => (
      <p key={i} className="control">
        <a
          className={`button ${option === active ? 'is-active' : ''}`}
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
