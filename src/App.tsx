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
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminProductForm from "./pages/Admin/AdminProductForm";
import AdminProducts from "./pages/Admin/AdminProducts";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminDeliveryPartners from "./pages/Admin/AdminDeliveyPartners";
import DeliveryLogin from "./pages/delivery/DeliveryLogin";
import DeliveryLayout from "./pages/delivery/DeliveryLayout";
import DeliveryDashboard from "./pages/delivery/DeliveryDashboard";

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

            <Route path="/addresses" element={<Adresses />} />

          </Route>
        </Route>
        {/* Admin pages */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />

          <Route path="products" element={<AdminProducts />} />
          <Route path="products/new" element={<AdminProductForm />} />
          <Route path="products/:id/edit" element={<AdminProductForm />} />

          <Route path="orders" element={<AdminOrders />} />
          <Route path="delivery-partners" element={<AdminDeliveryPartners />} />
        </Route>

        {/* Delivery partner pages  */}
        <Route path='/delivery/login' element={<DeliveryLogin />} />
        <Route path='/delivery' element={<DeliveryLayout />} />
        <Route index element={<DeliveryDashboard />} />

      </Routes>
    </>
  );
};


export default App;