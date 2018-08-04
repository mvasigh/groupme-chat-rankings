import React from 'react';

const Avatar = ({ img }) => {
  return (
    <p
      className="image is-64x64"
      style={{
        paddingTop: '8px',
        width: '64px',
        height: '64px',
        backgroundImage: `url(${img})`,
        position: 'relative',
        backgroundSize: 'cover',
        borderRadius: '6px'
      }}
    />
  );
};

export default Avatar;
