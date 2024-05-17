import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function ChatGPT() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>ChatGPT Page</h1>
        <p>Welcome to the ChatGPT Page!</p>
      </div>
      <Footer />
    </div>
  );
}

export default ChatGPT;