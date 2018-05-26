import React from 'react';

const RankListItem = props => {
  const message = props.message;
  return (
    <li className="list-group-item">
      <div className="media">
        <img className="mr-3 thumb" src={message.avatar_url} />
        <div className="media-body">
          <p>
            {message.text || '(No text)'} - {message.name}{' '}
            <strong>+{message.score}</strong>
          </p>
          {message.attachments.length > 0 &&
            message.attachments[0].type == 'image' && (
              <a href={message.attachments[0].url}>View attachment</a>
            )}
        </div>
      </div>
    </li>
  );
};

export default RankListItem;
