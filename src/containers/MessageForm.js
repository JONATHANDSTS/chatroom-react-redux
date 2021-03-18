import { connect } from 'react-redux';
import MessageForm from '../components/MessagesForm';
import { inputChange, messageSbumit } from '../actions/messagesAction';

const mapStateToProps = (state) => ({
  message: state.messages.messageText,
});

const mapDispatchToProps = (dispatch) => ({
  onMessageChange: (textSaisi) => {
    dispatch(inputChange(textSaisi));
  },
  onMessageSubmit: () => {
    dispatch(messageSbumit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
