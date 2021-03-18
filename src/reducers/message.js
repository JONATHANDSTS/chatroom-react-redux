import { INPUT_CHANGE } from '../actions/messagesAction';

const stateInitial = {
  list: [
    {
      id: '1',
      author: 'Karadoc',
      content: 'combiem de noisettes dans ce saussison',
    },
    {
      id: '2',
      author: 'Perceval',
      content: 'ce qui compte cest les valeurs',
    },
    {
      id: '3',
      author: 'Arthur',
      content: 'mais quelle truffe',
    },
  ],
  messageText: 'je suis en cours decriture...',
};

const reducerMessage = (state = stateInitial, action = {}) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        messageText: action.text,
      };
    default:
      return state;
  }
};

export default reducerMessage;
