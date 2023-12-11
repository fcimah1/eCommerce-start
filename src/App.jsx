import './App.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import CategoryView from './Pages/Category/CategoryView';
import Navbar from './Components/Navbar/Navbar';
import ContactUs from './Pages/ContactUs/ContactUs';
import Cart from './Pages/Cart/Cart';
import AboutUs from './Pages/AboutUs/AboutUs';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import SearchResult from './Pages/SearchResult/SearchResult';
import DashboardOfProductView from './Pages/ProductViewDashboard/ProductView';
import AddProduct from './Components/AddProduct/AddProduct';
import UpdateProduct from './Components/UpdateProduct/UpdateProduct';



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='category/:categoryName' element={<CategoryView />} />
        <Route path='search/:value' element={<SearchResult />} />
        <Route path='productDetails/:productId' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />
        <Route path='about' element={<AboutUs />} />
        <Route path='contact' element={<ContactUs />} />
        <Route path='products' element={<Outlet />}>
          <Route path='' element={<DashboardOfProductView />} />
          <Route path='addProduct' element={<AddProduct />} />
          <Route path='updateProduct/:productId' element={<UpdateProduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
