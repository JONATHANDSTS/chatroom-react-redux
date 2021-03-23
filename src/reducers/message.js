import { v4 as uuidv4 } from 'uuid';
import { INPUT_CHANGE, MESSAGE_SUBMIT } from '../actions/messagesAction';
import { LOGIN_ERROR, LOGIN_SUCCES } from '../actions/user';

const stateInitial = {
  list: [],
  messageText: '',
  author: 'anonyme',
};

const reducerMessage = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCES:
      return {
        ...state,
        author: action.payload.pseudo,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        author: 'anonyme',

      };
    case INPUT_CHANGE:
      return {
        ...state,
        messageText: action.text,
      };
    case MESSAGE_SUBMIT:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: uuidv4(),
            author: state.author,
            content: state.messageText,
          },
        ],
        messageText: '',

      };
    default:
      return {
        ...state,
        messageText: action.text,
      };
  }
};

export default reducerMessage;
