import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { loginInputChange } from '../actions/user';

const mapState = (state) => ({
  opened: true,
  formData: state.user.formData,
});

const mapDispatch = (dispatch) => ({
  onInPutChange: (ceQuiAEteTape) => {
    console.log(ceQuiAEteTape);
    dispatch(loginInputChange(ceQuiAEteTape));
  },
  onFormSubmit: () => {
    console.log('submit reducer');
  },
  onToggle: () => {
    console.log('toggle depuis reducer');
  },
});

export default connect(mapState, mapDispatch)(Settings);
