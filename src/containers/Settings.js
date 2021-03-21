import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { loginInputChange, toggleLoginForm, loginSubmit } from '../actions/user';

const mapState = (state) => ({
  opened: state.user.opened,
  formData: state.user.formData,
});

const mapDispatch = (dispatch) => ({
  onInPutChange: (ceQuiAEteTape) => {
    dispatch(loginInputChange(ceQuiAEteTape));
  },
  onFormSubmit: () => {
    dispatch(loginSubmit());
  },
  onToggle: () => {
    dispatch(toggleLoginForm());
  },
});

export default connect(mapState, mapDispatch)(Settings);
