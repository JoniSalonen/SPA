import './App.css'
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import ContactUs from './Components/Contactus';
import NotFound from './Components/NotFound';

function App() {
  return (
      <>
      <Navbar />
      <Header />
      <div className = 'container'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
      </>
    
  );
}

export default App;
