import React from "react";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

const OrderDetails = () => {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.orderID, 10));
  return (
    <h1>
      OrderDetails {params.orderID}
      {invoice.name}
    </h1>
  );
};

export default OrderDetails;
