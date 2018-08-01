import React from 'react';

// TODO - add date label, attachments, avatar, favorites, score UI elements

const Message = ({ name = 'Anonymous', text = '(Empty message)' }) => {
  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p className="image is-64x64">
            <img src="https://bulma.io/images/placeholders/128x128.png" />
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <small>21 minutes ago</small>
              <br />
              {text}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Message;
