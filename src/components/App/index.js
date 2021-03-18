// == Import npm
import React from 'react';
import './styles.css';
// == Import
import MessagesForm from 'src/containers/MessageForm';
import MessagesList from 'src/containers/MessagesList';


// == Composant
const App = () => (
  <div className="app">
    <MessagesList />
    <MessagesForm />

  </div>
);

// == Export
export default App;
