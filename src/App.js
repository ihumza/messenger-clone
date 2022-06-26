import { FormControl, Input } from '@material-ui/core';
import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import Message from './Message';
import { collection, query, onSnapshot, serverTimestamp, orderBy, addDoc } from "firebase/firestore";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import logo from './messenger.png';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState();
  const sendMessage = (event) => {
    event.preventDefault();
    const collectionRef = collection(db, "messages");
    const payload = { username: username, message: input, timestamp: serverTimestamp() }
    addDoc(collectionRef, payload);
    setInput('');
  }

  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("timestamp", "desc"))
    onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
    });
  }, []);

  useEffect(() => {
    setUsername(prompt('Please enter your name:'));
  }, [])


  return (
    <div className="App">
      <div>
        <img className='app__logo' src={logo} alt="Messenger Logo" />
      </div>
      <h2>{username}</h2>
      <form className='app__form'>
        <FormControl className="app__formControl">
          <Input className='app__input' placeholder='Enter your message' value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className='app__iconButton' variant='contained' color='primary' disabled={!input} type='submit' onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <div className='app__messages'>
        <FlipMove>
          {
            messages.map(({ id, message }) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>
      </div>
    </div>
  );
}

export default App;
