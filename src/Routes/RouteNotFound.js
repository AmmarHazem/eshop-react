import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const RouteNotFound = () => {
  return (
    <main className="route-not-found p-3 d-flex flex-column align-items-center justify-content-center">
      <h2>Route not found</h2>
      <Link to="/">
        <Button type="primary">Back Home</Button>
      </Link>
    </main>
  );
};

export default RouteNotFound;
