import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from ".src/Pages/Homepage/Homepage.jsx"
import Signinpage from ".src/Pages/Signinpage/Signinpage.jsx"
import Userpage from ".src/Pages/Userpage/Userpage.jsx"
import Errorpage from ".src/Pages/Errorpage/Errorpage.jsx"
import Footer from ".src/Component/Footer/Footer.jsx"
import Header from ".src/Component/Header/Header.jsx"

function App() {
  return (

      <Router>
        <Header />      
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signin" element={<Signinpage />} />
            <Route path="/user" element={<Userpage />} />
            <Route path="*" element={<Errorpage />} />
          </Routes>
        <Footer />
      </Router>

  );
}

export default App;