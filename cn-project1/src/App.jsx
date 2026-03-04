import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Networking from "./pages/Networking";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Computer Networks Project</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/networking">Networking Concepts</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/networking" element={<Networking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}