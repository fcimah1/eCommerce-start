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
import WishList from './Pages/WishList/WishList';
import Auth from './Pages/Auth/Auth';
import { Logg } from './Components/PrivateRoutes/PrivateRoutes';
import { useRecoilValue } from 'recoil';
import login from './Atoms/login.atom';
import Blog from './Pages/Blog/Blog';
import Footer from './Components/Footer/Footer';
import UserViewDashboard from './Pages/UserViewDashboard/UserViewDashboard';
import AddUser from './Components/DashUsers/AddUser';
import UpdateUser from './Components/DashUsers/UpdateUser';
import UserDetails from './Components/DashUsers/UserDetails';



function App() {
  const loginState = useRecoilValue(login)
  console.log(loginState)

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
        <Route path='blog' element={<Blog />} />
        <Route path='wishList' element={<WishList />} />
        <Route element={<Logg logged={loginState} />}>
          <Route path='/auth' element={<Auth />} />
        </Route>
        <Route path='dashboard/dashboardProducts' element={<Outlet />}>
          <Route path='' element={<DashboardOfProductView />} />
          <Route path='updateProduct/:productId' element={<UpdateProduct />} />
          <Route path='addProduct' element={<AddProduct />} />
        </Route>
        <Route path='dashboard/dashboardUsers' element={<Outlet />}>
          <Route path='' element={<UserViewDashboard />} />
          <Route path='updateUser/:userId' element={<UpdateUser />} />
          <Route path='addUser' element={<AddUser />} />
          <Route path='userDetails/:userId' element={ <UserDetails/>} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
