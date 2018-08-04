import React, { Component } from 'react';
import Message from './Message';

const MessageList = ({ messages = [] }) => {
  const renderMessages = () => {
    if (messages.length === 0) {
      return (
        <div className="level">
          <div className="level-item" style={{ paddingTop: '24px' }}>
            <p className="subtitle has-text-grey is-6">Loading...</p>
          </div>
        </div>
      );
    }
    return messages.map((message, i) => {
      return (
        <li key={i} style={{ paddingBottom: '1.2rem' }}>
          <Message {...message} />
        </li>
      );
    });
  };

  console.log(messages);
  return <ul>{renderMessages()}</ul>;
};

export default MessageList;
