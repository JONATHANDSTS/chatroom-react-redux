import { LOGIN_INPUT_CHANGE, TOGGLE_LOGIN_FORM, LOGIN_SUBMIT } from '../actions/user';

const initialState = {
  opened: true,
  formData: {
    email: 'test@gmail.com',
    password: '123',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        opened: false,
        formData: {
          email: '',
          password: '',
        },
      };
    case TOGGLE_LOGIN_FORM:
      return {
        ...state,
        opened: !state.opened,
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
