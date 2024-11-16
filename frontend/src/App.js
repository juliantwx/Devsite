import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Routes to all existing pages */}
          <Route path="/" element={<Home />} />
          <Route path="/maintenance" element={<Maintenance />} />
          {/* Reroute all non-existing routes to the 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
