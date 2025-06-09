import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import Combo from "./pages/Combo";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import CallNowButton from "./components/CallNowButton";
import routes from "./routes/routes";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/CheckOut";

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
      </Routes>

      <CallNowButton />
      <Footer />
    </Router>
  );
};

export default App;
