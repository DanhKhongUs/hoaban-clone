import Introduce from "~/pages/Introduce";
import routes from "./routes";
import Home from "~/pages/Home";
import Product from "~/pages/ProductPage";
import Contact from "~/pages/Contact";
import Combo from "~/pages/Combo";
import Login from "~/pages/Login";
import Cart from "~/pages/Cart";

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.product, component: Product },
  { path: routes.combo, component: Combo },
  { path: routes.introduce, component: Introduce },
  { path: routes.contact, component: Contact },
  { path: routes.login, component: Login },
  { path: routes.cart, component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
