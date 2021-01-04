import React from 'react';
import './App.css';
import MessageBody from './components/MessageBody/MessageBody';
import Message, { USERTYPE, POSITION } from './components/Message/Message';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import TextArea from './components/TextArea/TextArea';
// import Profile from './components/Profile/Profile';


function App() {
  const messengerRef = React.createRef();
  const [input, setInput] = React.useState('');


  const MessageHandler = (event) => {
    event.preventDefault();
    const footer = messengerRef?.current;
    const form = footer.querySelector('form');
    const likeBtn = footer.querySelector('.footer__likeBtn');

    if (event.target.value.length > 0) {
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

  return (
    <div className="App">
      <div ref={messengerRef} className="facebookMessenger">
        {/* <Profile /> */}
        <Header />
        <MessageBody>
          <Message user={USERTYPE.CURRENT} message="text 1" />
          <Message user={USERTYPE.NEXTCURRENT} position={POSITION.LEFT} message="text 2" />
        </MessageBody>
        <Footer>
          <Form>
            <TextArea value={input} onChange={MessageHandler} />
          </Form>
        </Footer>
      </div>

    </div>
  );
}

export default App;
