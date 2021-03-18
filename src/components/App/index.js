// == Import npm
import React from 'react';
import './styles.css';
// == Import
import MessagesForm from 'src/components/MessagesForm';
import MessagesList from 'src/components/MessagesList';

const fakeMessages = [
  {
    id: '1',
    author: 'Karadoc',
    content: 'combiem de noisettes dans ce saussison',
  },
  {
    id: '2',
    author: 'Perceval',
    content: 'ce qui compte cest les valeurs',

  }, {
    id: '3',
    author: 'Arthur',
    content: 'mais quelle truffe',

  },

];

// == Composant
const App = () => (
  <div className="app">
    <MessagesList list={fakeMessages} />
    <MessagesForm
      messageText="coucou un test"
      onMessageChange={(textsaisi) => {
        console.log(textsaisi);
      }}
      onMessageSubmit={() => {
        console.log('le message doit etre envoye');
      }}
    />
  </div>
);

// == Export
export default App;
