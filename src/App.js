import React from 'react';
import './App.css';
import MessageBody from './components/MessageBody/MessageBody';
import Message, { USERTYPE,POSITION } from './components/Message/Message';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <div className="facebookMessenger">
        {/* <Profile /> */}
        <Header />
        <MessageBody>
          <Message user={USERTYPE.CURRENT} message="Twe vin vieux NeV" />
          <Message user={USERTYPE.NEXTCURRENT} position={POSITION.LEFT} message="Non mamou p vin experiencer" />
        </MessageBody>
        <Footer />
      </div>

    </div>
  );
}

export default App;
