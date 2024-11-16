import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

function App() {
  const isMaintenance = true; // TODO: Fetch this variable through subscription to the backend server instead
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {isMaintenance ? (
            // Redirect all routes to the Maintenance page if the website is under maintenance
            <Route path="*" element={<Maintenance />} />
          ) : (
            // Usual routing
            <>
              {/* Set default URL to the home page */}
              <Route path="/" element={<Navigate to="/home" />} />
              {/* Routes to all existing pages */}
              <Route path="/home" element={<Home />} />
              {/* Reroute all non-existing routes to the 404 page */}
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
