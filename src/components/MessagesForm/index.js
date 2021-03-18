import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MessageForm = ({ messageText, onMessageChange, onMessageSubmit }) => (
  <form
    className="message-form"
    onSubmit={(e) => {
      e.preventDefault();
      onMessageSubmit();
    }}
  >
    <input
      className="form-input"
      type="text"
      placeholder="saisissez un message"
      value={messageText}
      onChange={(e) => {
        const ceQuiEstTape = e.target.value;
        onMessageChange(ceQuiEstTape);
      }}
    />
    <button type="submit" className="form-submit">&gt;</button>
  </form>
);

MessageForm.propTypes = {
  messageText: PropTypes.string.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
};

export default MessageForm;
