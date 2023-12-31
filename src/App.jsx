import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import OurStore from './pages/OurStore';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import LogIn from './pages/LogIn';
import ForgotPassword from './pages/ForgotPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Refundpolicy from './pages/Refundpolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndCon from './pages/TermAndCon';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import CheckOut from './pages/CheckOut';


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='store' element={<OurStore/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='blog' element={<Blog/>}></Route>
        <Route path='blog/:id' element={<SingleBlog/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='checkout' element={<CheckOut/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='compare-product' element={<CompareProduct/>}></Route>
        <Route path='wishlist' element={<WishList/>}/>
        <Route path='login' element={<LogIn/>}/>
         <Route path='forgot-password' element={<ForgotPassword/>}/>
         <Route path='signup' element={<SignUp/>}/>
         <Route path='reset-password' element={<ResetPassword/>}/>
         <Route path='privacy-policy' element={<PrivacyPolicy/>}/>
         <Route path='refund-policy' element={<Refundpolicy/>}/>
         <Route path='shipping-policy' element={<ShippingPolicy/>}/>
         <Route path='term-and-condition' element={<TermAndCon/>}/>




      </Route>
    </Routes>
    </BrowserRouter>
    hy
        
    </>
  )
}

export default App
