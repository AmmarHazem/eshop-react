import React from "react";
import { Routes, Route } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import Cart from "./Routes/Cart";
import MyOrders from "./Routes/MyOrders";
import ProductsList from "./Routes/ProductsList";
import RouteNotFound from "./Routes/RouteNotFound";
import Profile from "./Routes/Profile";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="my-orders" element={<MyOrders />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
