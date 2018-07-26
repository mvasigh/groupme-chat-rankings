import React from 'react';

const Column = ({ children, size = '' }) => {
  const prefix = size ? 'is-' : '';
  return <div className={`column ${prefix}${size}`}>{children}</div>;
};

export default Column;
