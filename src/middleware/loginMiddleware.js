import axios from 'axios';
import { LOGIN_SUBMIT, loginSucces, loginError } from '../actions/user';

const url = 'http://localhost:3001/login';

export default (store) => (next) => (action) => {
  // je laisse passer chaque action
  next(action);
  // je vais examiner le type d'action
  // pour reagir quand jen ai besoin
  switch (action.type) {
    case LOGIN_SUBMIT:
      // lancer ma requete
      axios({
        method: 'post',
        url,
        // store.getState() renvoie tout le state
        data: store.getState().user.formData,
      }).then((res) => {
        // en cas de succes
        // jinforme mon reducer via
        // laction LOGIN_SUCCES
        store.dispatch(loginSucces(res.data));
        console.log(res.data);
      })
        .catch((er) => {
        // en cas de echec
          console.log(er);
          store.dispatch(loginError());
        });
      break;
    default:
  }
};
