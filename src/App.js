import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Headphones from './components/Headphones';
import SmallBusinessDeals from './components/SmallBusinessDeals';
import BoatProducts from './components/BoatProducts';
import NoiseProducts from './components/NoiseProducts';
import BoultProducts from './components/BoultProducts';
import ZebronicsProducts from './components/ZebronicsProducts';
import ProductItem from './components/ProductItem';
import Cart from './components/Cart';
import PaymentPage from './components/PaymentPage';
import CartContext from './context/CartContext';
import Account from './components/Account';
import Profile from './components/Profile';
import AddedToCartPage from './components/AddedToCartPage';
import SearchListPage from './components/SearchListPage';
import Header from './components/Header';
import Furniture from "./components/Furniture";
import Toys from "./components/Toys";
import Footwear from "./components/Footwear";
import HomeEssentials from "./components/HomeEssentials";
import AutomotiveEssentials from "./components/AutomotiveEssentials";
import Appliances from "./components/Appliances";
import WhirlkartBrands from "./components/WhirlkartBrands";
import Categories from "./components/Categories";
import OrderDetails from './components/OrderDetails'
import './App.css';

const AppContent = ({ onSetSearchQuery, onSetCategory, searchQuery, category}) => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/login" && (
        <Header onSetSearchQuery={onSetSearchQuery} onSetCategory={onSetCategory} />
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/small-businesses' element={<SmallBusinessDeals />} />
        <Route path='/boat-products' element={<BoatProducts />} />
        <Route path='/noise-products' element={<NoiseProducts />} />
        <Route path='/boult-products' element={<BoultProducts />} />
        <Route path='/zebronics-products' element={<ZebronicsProducts />} />
        <Route path='/product-page' element={<ProductItem />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/payment-page' element={<PaymentPage />} />
        <Route path='/account' element={<Account />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/added-to-cart' element={<AddedToCartPage />} />
        <Route path='/search-list-page' element={<SearchListPage searchQuery={searchQuery} category={category} />} />
        <Route path='/furniture' element={<Furniture />} />
        <Route path='/toys' element={<Toys />} />
        <Route path='/footwear' element={<Footwear />} />
        <Route path='/home-essentials' element={<HomeEssentials />} />
        <Route path='/appliances' element={<Appliances />} />
        <Route path='/whirlkart-brands' element={<WhirlkartBrands />} />
        <Route path='/automotive-essentials' element={<AutomotiveEssentials />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/order-details' element={<OrderDetails />} />
      </Routes>
    </>
  );
};
const App = () => {
  const [cartList, setCartList] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [category, setCategory] = useState('')
  const [total, setTotal] = useState(0);
    useEffect(() => {
        const calculatedTotal = cartList.reduce((acc, each) => acc + Number(each.price), 0)
        setTotal(calculatedTotal)
    }, [cartList, setTotal])

  const addCartBtnClicked = (product) => {
    setCartList((prevCartList) => [...prevCartList, product])
  }

  const [isLoginSuccessful, setIsLoginSuccessful] = useState(
    localStorage.getItem('isAuthenticated') === 'false'
  )

  const onSetSearchQuery = (query) => {
    setSearchQuery({ searchQuery: query });
  };

  const onSetCategory = (category) => {
    setCategory((prevCategory) => [...prevCategory, category])
  }
  useEffect(() => {
        const calculatedTotal = cartList.reduce((acc, each) => acc + Number(each.price), 0)
        setTotal(calculatedTotal)
    }, [cartList, setTotal])

    return (
      <CartContext.Provider
        value={{
          isLoginSuccessful, setIsLoginSuccessful,
          cartList, setCartList,
          addCartBtnClicked,
          total, setTotal,
        }}
      >
        <Router>
          <AppContent onSetSearchQuery={onSetSearchQuery} onSetCategory={onSetCategory} searchQuery={searchQuery} category={category}/>
        </Router>
      </CartContext.Provider>
    );
}

export default App;



