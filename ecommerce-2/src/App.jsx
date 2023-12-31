import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './Components/Pages/Contact/Contact';
import About from './Components/Pages/About/About';
import Footer from './Components/Footer/Footer';
import ProductDetails from './Components/Pages/ProductDetails/ProductDetails';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='product/:productId' element={<ProductDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
