// == Import npm
import React from 'react';
import './styles.css';
// == Import
import MessagesForm from 'src/containers/MessageForm';
import MessagesList from 'src/containers/MessagesList';
import Settings from 'src/components/Settings';


// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <MessagesList />
    <MessagesForm />

  </div>
);

// == Export
export default App;
