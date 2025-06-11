import Introduce from "~/pages/Introduce";
import routes from "./routes";
import Home from "~/pages/Home";
import Product from "~/pages/ProductPage";
import Contact from "~/pages/Contact";
import Combo from "~/pages/Combo";
import Login from "~/pages/LoginPage/Login";
import Cart from "~/pages/CartPage/Cart";
import Checkout from "~/pages/CartPage/CheckOut";
import LostPassword from "~/pages/LoginPage/LostPassword";
import MyAccount from "~/pages/AccountPage/MyAccount";
import Dashboard from "~/pages/AccountPage/Dashboard";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.product, component: Product },
  { path: routes.combo, component: Combo },
  { path: routes.introduce, component: Introduce },
  { path: routes.contact, component: Contact },
  { path: routes.login, component: Login },
  { path: routes.cart, component: Cart },
  { path: routes.checkout, component: Checkout },
  { path: routes.lostpassword, component: LostPassword },
  { path: routes.myaccount, component: MyAccount },
  { path: routes.dashboard, component: Dashboard },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
