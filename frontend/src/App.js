import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { snapToTop } from "./utils/ScrollUtils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

function App() {
  const isMaintenance = true; // TODO: Fetch this variable through subscription to the backend server instead

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          {isMaintenance ? (
            // Redirect all routes to the Maintenance page if the website is under maintenance
            <>
              <Route path="/test" element={<Home />} />
              {/*TODO: This is only used for testing. Remove this when going live*/}
              <Route path="*" element={<Maintenance />} />
            </>
          ) : (
            // Usual routing
            <>
              {/* Set default URL to the home page */}
              <Route path="/" element={<Navigate to="/home" />} />
              {/* Routes to all existing pages */}
              <Route path="/home" element={<Home />} />
              {/* TODO: Write the routes for all other pages */}
              {/* Reroute all non-existing routes to the 404 page */}
              <Route path="*" element={<NotFound />} />
            </>
          )}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// This component is necessary because useLocation() can only be used in the context of a <Router> component.
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    snapToTop();
  }, [location]);

  return null; // Return null as this component does not render anything
}

export default App;
