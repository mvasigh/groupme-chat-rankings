import React, { Component } from 'react';
import Message from './Message';

const MessageList = ({ messages = [] }) => {
  const renderMessages = () => {
    if (messages.length === 0) {
      return <div>Loading...</div>;
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
