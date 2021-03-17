// == Import npm
import React from 'react';
import './styles.css';
// == Import
import MessagesForm from 'src/components/MessagesForm';
import MessagesList from 'src/components/MessagesList';

// == Composant
const App = () => (
  <div className="app">
    <MessagesList />
    <MessagesForm />
  </div>
);

// == Export
export default App;
