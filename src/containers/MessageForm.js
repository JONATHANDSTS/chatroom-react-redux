import { connect } from 'react-redux';
import MessageForm from '../components/MessagesForm';
import { inputChange, messageSbumit } from '../actions/messagesAction';

const mapStateToProps = (state) => ({
  messageText: state.messages.messageText,
  loading: state.user.loading,
  user: state.user.user,
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
