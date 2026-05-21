import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

import AppLayOut from "./pages/AppLayOut";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import Product from "./pages/Product";
import SearchResult from "./pages/SearchResult";
import FlashDeals from "./pages/FlashDeals";
import CheckOut from "./pages/CheckOut";
import MyOrder from "./pages/MyOrder";
import OrderTracking from "./pages/OrderTracking";
import Adresses from "./pages/Adresses";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#1B3022",
            color: "#fff",
            borderRadius: "12px",
            fontSize: "14px",
          },
        }}
      />

      <Routes>
        {/* Auth pages */}
        <Route path="/login" element={<Login />} />

        {/* Main layout */}
        <Route path="/" element={<AppLayOut />}>

          <Route index element={<Home />} />

          <Route path="products" element={<Product />} />

          <Route path="products/:id" element={<ProductPage />} />

          <Route path="search" element={<SearchResult />} />

          <Route path="deals" element={<FlashDeals />} />

          <Route element={<ProtectedRoute />}>

            <Route path="checkout" element={<CheckOut />} />

            <Route path="orders" element={<MyOrder />} />

            <Route path="orders/:id" element={<OrderTracking />} />

            <Route path="sdresses" element={<Adresses />} />

          </Route>


        </Route>
      </Routes>
    </>
  );
};


export default App;