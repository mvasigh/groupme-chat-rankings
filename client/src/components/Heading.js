import React from 'react';

export default ({ type, size, children }) => {
  return <p className={`${type} is-${size}`}>{children}</p>;
};
