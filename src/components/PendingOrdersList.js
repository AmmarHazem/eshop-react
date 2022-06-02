import React from "react";
import { Link, Outlet } from "react-router-dom";
import { getInvoices } from "../data";

const PendingOrdersList = () => {
  const invoices = getInvoices();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map((item) => {
          return (
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              key={item.number}
              to={`/orders/${item.number}`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
      <Outlet />
    </div>
  );
};

export default PendingOrdersList;
