import React from 'react';
import moment from 'moment';

const RankListItem = props => {
  const message = props.message;
  const date = moment.unix(props.message.created_at).fromNow();
  // TODO: date label next to name, likes below message, attachment on same line

  return (
    <div className="box">
      <article className="media">
        <figure className="media-left">
          <p className="image is-32x32">
            <img src={message.avatar_url} />
          </p>
        </figure>
        <div className="media-content">
          <span className="tag is-primary is-medium is-pulled-right">{`+${
            message.score
          }`}</span>
          <div className="content">
            <p>
              <strong>{message.name}</strong>
              <small className="has-text-grey"> {date}</small>
            </p>
            <p>
              {message.text || '(No text)'}
              {message.attachments.length > 0 &&
                message.attachments[0].type == 'image' && (
                  <span>
                    {' '}
                    - <a href={message.attachments[0].url}>View image</a>
                  </span>
                )}
              <br />
              <small className="has-text-danger">
                {message.favorited_by.length + ' likes'}
              </small>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RankListItem;
