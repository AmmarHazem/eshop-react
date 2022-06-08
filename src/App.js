import React from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import TopNavBar from "./components/TopNavBar";
import Cart from "./Routes/Cart";
import MyOrders from "./Routes/MyOrders";
import ProductsList from "./Routes/ProductsList";
import RouteNotFound from "./Routes/RouteNotFound";
import Profile from "./Routes/Profile";
import Login from "./Routes/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TopNavBar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="my-orders" element={<MyOrders />} />
          <Route path="profile" element={<Profile />} />
          <Route path="/" element={<ProductsList />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
