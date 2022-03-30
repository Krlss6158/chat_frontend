import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Chat, Home, Login, Signup, NotMatch } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
