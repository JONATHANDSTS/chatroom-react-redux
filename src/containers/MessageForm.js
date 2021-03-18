import { connect } from 'react-redux';
import MessageForm from '../components/MessagesForm';
import { inputChange } from '../actions/messagesAction';

const mapStateToProps = (state) => ({
  message: state.messages.messageText,
});

const mapDispatchToProps = (dispatch) => ({
  onMessageChange: (textSaisi) => {
    dispatch(inputChange(textSaisi));
  },
  onMessageSubmit: () => {
    console.log('le message doit etre envoye');
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
