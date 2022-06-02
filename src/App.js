import { Link, Routes, Route } from "react-router-dom";
import ProductsList from "./Routes/ProductsList";
import OrdersList from "./Routes/OrdersList";
import PendingOrdersList from "./components/PendingOrdersList";
import PreviousOrdersList from "./components/PreviousOrdersList";
import OrderDetails from "./Routes/OrderDetails";

function App() {
  return (
    <div className="App">
      <nav>
        {/* <Link to="/profile">Profile</Link> */}
        <Link to="/">Home</Link> | <Link to="/orders">Orders</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="orders" element={<OrdersList />}>
          <Route index element={<main>Select Invoice</main>} />
          <Route path="" element={<PendingOrdersList />}>
            <Route path=":orderID" element={<OrderDetails />} />
          </Route>
          <Route path="previous" element={<PreviousOrdersList />} />
        </Route>
        <Route
          path="*"
          element={
            <main>
              <p>Route not found</p>
              <Link to="/">Back Home</Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
