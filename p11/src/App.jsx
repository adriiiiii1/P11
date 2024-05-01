import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header/Header.jsx';
import Footer from './Component/Footer/Footer.jsx';
import Homepage from './Pages/Homepage/Homepage.jsx';
import Signinpage from './Pages/Signinpage/Signinpage.jsx';
import Userpage from './Pages/Userpage/Userpage.jsx';
import Errorpage from './Pages/Errorpage/Errorpage.jsx';
import UserContext from './UserContext'; 

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, username, setUsername }}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/sign-in" element={<Signinpage />} />
            <Route path="/user" element={<Userpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;