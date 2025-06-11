import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Combo from "./pages/Combo";
import Login from "./pages/LoginPage/Login";
import Cart from "./pages/CartPage/Cart";
import ProductDetail from "./pages/ProductDetail";
import CallNowButton from "./components/CallNowButton";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/CartPage/CheckOut";
import LostPassword from "./pages/LoginPage/LostPassword";
import MyAccount from "./pages/AccountPage/MyAccount";
import Orders from "./pages/AccountPage/Orders";
import Downloads from "./pages/AccountPage/Downloads";
import Profile from "./pages/AccountPage/Profile";
import Address from "./pages/AccountPage/Address";
import Logout from "./pages/AccountPage/Logout";
import Dashboard from "./pages/AccountPage/Dashboard";
import AddAddress from "./pages/AccountPage/AddAddress";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.product} element={<ProductPage />} />
        <Route path={routes.combo} element={<Combo />} />
        <Route path={routes.introduce} element={<Introduce />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path="/cart/:id" element={<ProductDetail />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.checkout} element={<Checkout />} />
        <Route path={routes.lostpassword} element={<LostPassword />} />
        <Route path={routes.myaccount} element={<MyAccount />}>
          <Route index element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="address" element={<Address />} />
          <Route path="address/add" element={<AddAddress />} />
          <Route path="profile" element={<Profile />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>

      <CallNowButton />
      <Footer />
    </Router>
  );
};

export default App;
