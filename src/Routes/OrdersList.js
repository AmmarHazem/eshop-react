import React from "react";
import { Link, Outlet } from "react-router-dom";

const OrdersList = () => {
  return (
    <main>
      <h1>OrdersList</h1>
      <nav>
        <Link to="/orders">Pending Orders</Link>
        {" | "}
        <Link to="/orders/previous">Previous Orders</Link>
      </nav>
      <Outlet />
    </main>
  );
};

export default OrdersList;
