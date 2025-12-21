import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Cart from "./pages/Cart/Cart.jsx";
import Result from "./Pages/Results/Resulst";
import Auth from "./Pages/Auth/Auth";
import ProductDetail from "./Pages/productDetail/ProductDetails";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./pages/payment/Payment";
import Orders from "./pages/orders/Orders";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function Router() {
  const stripePromise = loadStripe(
    "pk_test_51SgjFjAQqF9qnQefrGbeZCbW4snsDAdqJI8EMyIWF2QnO8YBCUDfsKLSKGcgglHEfyP0CLcNjRzm5dPGUoYympxt009Gfm6sw5"
  );
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Result />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"You need to be signed in to pay"}
              redirect={"/auth"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"You must be logged in to access your orders"}
              redirect={"/auth"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>
    // </BrowserRouter>
  );
}

export default Router;
