import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

// message list
const Messages = ({ list }) => (
  <div className="messages">
    {list.map((messageObject) => (
      <Message key={messageObject.id} {...messageObject} />
    ))}
  </div>
);

Messages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// message individuel
const Message = ({ author, content }) => (
  <div className="message">
    <p className="message-author">{author}</p>
    <p className="message-content">{content}</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Messages;
