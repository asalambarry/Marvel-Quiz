import '../../styles/App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import Welcome from '../Welcome/Welcome';
import Loggin from '../Loggin/Loggin';
import Signup from '../Signup/Signup';
import ErrorPage from '../ErrorPage/ErrorPage';
function App() {
    return (
        <Router>
        <Header />
 
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Loggin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
 
        <Footer />
    </Router>
    );
}

export default App;
