import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Messages = () => (
  <div className="messages">
    <Message />
    <Message />
    <Message />
    <Message />
    <Message />

  </div>

);

const Message = () => (
  <div className="message">
    <p className="message-author">author</p>
    <p className="message-content">message</p>
  </div>
);

export default Messages;
