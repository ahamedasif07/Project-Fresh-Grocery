import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />} />

          <Route path="/product" element={<Product />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </Router>
  );
}
