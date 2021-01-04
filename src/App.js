import React from 'react';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import { db } from './firebase';
import MessageBody from './components/MessageBody/MessageBody';
import Message, { USERTYPE, POSITION } from './components/Message/Message';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TextArea from './components/TextArea/TextArea';
import './App.css';


function App() {
  const messengerRef = React.createRef();
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState([]);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  React.useEffect(() => {
    db.collection("messages")
      .orderBy('timestamp', 'asc')
      .onSnapshot(snapshot => { //the snapshot takes a picture of the current db befeore a change happens
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
      });
  }, []);

  const MessageHandler = (event) => {
    event.preventDefault();
    const footer = messengerRef?.current;
    const form = footer.querySelector('form');
    const likeBtn = footer.querySelector('.footer__likeBtn');

    if (event.target.value.length >= 0) {
      setInput(event.target.value);
      // event.target.style.height = event.target.clientHeight + event.target.scrollHeight
      !form.classList.contains('inc_width') && form.classList.add('inc__width');
      !likeBtn.classList.contains('hidden') && likeBtn.classList.add('hidden');
      return;
    }
    !form.classList.contains('inc_width') && form.classList.remove('inc__width');
    likeBtn.classList.contains('hidden') && likeBtn.classList.remove('hidden');
    return;
  };

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages")
      .add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
    setInput("");
    return;
  };

  return (
    <div className="App">
      <div ref={messengerRef} className="facebookMessenger">
        {/* <Profile /> */}
        <Header username={username} />
        <MessageBody>
          <FlipMove>
            {
              messages.map((newMessage) => <Message
                key={newMessage.id}
                user={newMessage.data.username !== username ? USERTYPE.NEXTCURRENT : USERTYPE.CURRENT}
                position={newMessage.data.username !== username ? POSITION.LEFT : POSITION.RIGHT}
                username={newMessage.data.username} user={USERTYPE.CURRENT} message={newMessage.data.message}
              />
              )
            }
          </FlipMove>

          {/* <Message user={USERTYPE.NEXTCURRENT} position={POSITION.LEFT} message="text 2" /> */}
        </MessageBody>
        <Footer>
          <Form sendMessageCb={sendMessage}>
            <TextArea value={input} onChange={MessageHandler} />
          </Form>
        </Footer>
      </div>

    </div>
  );
}

export default App;
