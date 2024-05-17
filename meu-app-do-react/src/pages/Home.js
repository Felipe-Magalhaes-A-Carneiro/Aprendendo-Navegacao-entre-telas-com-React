import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to the Home Page!</p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;