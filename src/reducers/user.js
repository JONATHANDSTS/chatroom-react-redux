import { LOGIN_INPUT_CHANGE } from '../actions/user';

const initialState = {
  opened: true,
  formData: {
    email: 'test@gmail.com',
    password: '123',
  },
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
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
