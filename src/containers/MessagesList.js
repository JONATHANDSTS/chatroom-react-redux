import { connect } from 'react-redux';
import MessageList from '../components/MessagesList';

const mapStateToProps = (state) => ({
  list: state.messages.list,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
