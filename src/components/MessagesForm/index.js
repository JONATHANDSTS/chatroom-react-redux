import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const MessageForm = () => (
  <form className="message-form">
    <input className="form-input" type="text" placeholder="saisissez un message" />
    <button type="submit" className="form-submit">&gt;</button>
  </form>
);

export default MessageForm;
