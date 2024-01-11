import { useState } from "react";
import "./App.css";
import { Navbar, Footer } from "./components";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import { Shop, Cart, LoginSignUp, Product, ShopCategory } from "./pages";
import { kid_banner, men_banner, women_banner } from "./utils/constants/banner";

function App() {
  const [count, setCount] = useState(0);
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Shop />,
  //   },
  //   {
  //     path: "/men",
  //     element: <ShopCategory category="men" />,
  //   },
  //   {
  //     path: "/women",
  //     element: <ShopCategory category="women" />,
  //   },
  //   {
  //     path: "/kids",
  //     element: <ShopCategory category="kids" />,
  //   },
  //   {
  //     path: "/product",
  //     element: <Product />,
  //     children: [
  //       {
  //         path: ":productId",
  //         element: <Product />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "/cart",
  //     element: <Cart />,
  //   },
  //   {
  //     path: "/login",
  //     element: <LoginSignUp />,
  //   },
  // ]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/men"
            element={<ShopCategory banner={men_banner} category="men" />}
          />
          <Route
            path="/women"
            element={<ShopCategory banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategory banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
