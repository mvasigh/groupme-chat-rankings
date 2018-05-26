import React from 'react';

const RankListItem = props => {
  const message = props.message;
  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p className="image is-32x32">
            <img src={message.avatar_url} />
          </p>
        </figure>
        <div className="media-content">
          <span className="tag is-dark is-medium is-rounded is-pulled-right">{`+${
            message.score
          }`}</span>
          <div className="content">
            <p>
              <strong>{message.name}</strong>
            </p>
            <p>{message.text || '(No text)'}</p>
          </div>
          {message.attachments.length > 0 &&
            message.attachments[0].type == 'image' && (
              <p>
                <a href={message.attachments[0].url}>View attachment</a>
              </p>
            )}
        </div>
      </article>
    </div>
  );
};

export default RankListItem;
