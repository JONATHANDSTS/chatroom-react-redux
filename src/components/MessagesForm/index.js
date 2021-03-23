import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MessageForm = ({
  messageText,
  onMessageChange,
  onMessageSubmit,
  loading,
  user,
}) => {
  let placeholder = 'connectez vous pour tchatter';
  if (loading) {
    placeholder = `connexion en cours.. ${user.pseudo}`;
  }
  if (user.pseudo) {
    placeholder = 'saississez un message';
  }
  return (
    <form
      className="message-form"
      onSubmit={(e) => {
        e.preventDefault();
        onMessageSubmit();
      }}
    >
      <input
        disabled={!user.pseudo}
        className="form-input"
        type="text"
        placeholder={placeholder}
        value={messageText}
        onChange={(e) => {
          const ceQuiEstTape = e.target.value;
          onMessageChange(ceQuiEstTape);
        }}
      />
      <button type="submit" className="form-submit">&gt;</button>
    </form>
  );
};

MessageForm.propTypes = {
  messageText: PropTypes.string.isRequired,
  onMessageChange: PropTypes.func.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default MessageForm;
