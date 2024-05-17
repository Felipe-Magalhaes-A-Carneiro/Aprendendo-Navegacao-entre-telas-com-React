import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ChatGPT from './pages/ChatGPT'; // Certifique-se de que está escrito exatamente como o nome do arquivo

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatgpt" element={<ChatGPT />} />
      </Routes>
    </Router>
  );
}

export default App;