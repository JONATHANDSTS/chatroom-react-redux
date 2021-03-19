import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Settings = ({
  formData,
  opened,
  onToggle,
  onInPutChange,
  onFormSubmit,
}) => {
  const handleInPutChange = (evt) => {
    const { name, value } = evt.target;
    onInPutChange({
      [name]: value,
    });
  };

  return (
    <div className={opened ? 'settings opened' : 'settings'}>
      <div className="settings-zone">
        <button
          className={opened ? 'toggle-button opened' : 'toggle-button'}
          type="button"
          onClick={onToggle}
        >
          +
        </button>
      </div>
      <form
        className="settings-zone"
        onSubmit={(evt) => {
          evt.preventDefault();
          onFormSubmit();
        }}
      >
        <input
          name="email"
          type="email"
          placeholder="email"
          value={formData.email}
          onChange={handleInPutChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={formData.password}
          onChange={handleInPutChange}
        />
        <button className="submit-button" type="submit"> Envoyer </button>
      </form>
    </div>
  );
};

Settings.propTypes = {
  opened: PropTypes.bool.isRequired,
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
  }).isRequired,
  onToggle: PropTypes.func.isRequired,
  onInPutChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,

};

export default Settings;
