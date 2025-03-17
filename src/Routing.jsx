import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayOut from "./MainLayOut";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayOut />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
