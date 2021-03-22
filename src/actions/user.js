export const LOGIN_INPUT_CHANGE = 'LOGIN_INPUT_CHANGE';
export const TOGGLE_LOGIN_FORM = 'TOGGLE_LOGIN_FORM';
export const LOGIN_SUBMIT = 'LOGIN_SUBMIT';
export const LOGIN_SUCCES = 'LOGIN_SUCCES';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginInputChange = (payload) => ({
  type: LOGIN_INPUT_CHANGE,
  payload,
});

export const toggleLoginForm = () => ({
  type: TOGGLE_LOGIN_FORM,
});

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT,
});

export const loginSucces = (payload) => ({
  type: LOGIN_SUCCES,
  payload,
});

export const loginError = () => ({
  type: LOGIN_ERROR,
});
