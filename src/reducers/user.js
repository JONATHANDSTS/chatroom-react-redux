import {
  LOGIN_INPUT_CHANGE,
  TOGGLE_LOGIN_FORM,
  LOGIN_SUBMIT,
  LOGIN_SUCCES,
  LOGIN_ERROR,
} from '../actions/user';

const initialState = {
  opened: true,
  loading: false,
  user: {},
  formData: {
    email: 'acidman@herocorp.io',
    password: 'fructis',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUBMIT:
      return {
        ...state,
        opened: false,
        loading: true,
      };
    case LOGIN_SUCCES:
      return {
        ...state,
        loading: false,
        formData: { email: '', password: '' },
        user: {
          ...action.payload,
        },
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: {},
        opened: true,
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
