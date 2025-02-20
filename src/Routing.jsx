import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayOut from "./MainLayOut";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayOut />} />
      </Routes>
    </Router>
  );
}
