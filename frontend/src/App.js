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
import Work from "./pages/Work";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";

function App() {
  const isMaintenance = false; // TODO: Fetch this variable through subscription to the backend server instead

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <Routes>
          {isMaintenance ? (
            // Redirect all routes to the Maintenance page if the website is under maintenance
            <>
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
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/claw-stars" element={<Maintenance />} />
              <Route path="/projects/color-launch" element={<Maintenance />} />
              <Route
                path="/projects/go-gold-castle"
                element={<Maintenance />}
              />
              <Route path="/projects/trapped" element={<Maintenance />} />
              <Route path="/projects/survive!" element={<Maintenance />} />
              <Route path="/projects/box-mania" element={<Maintenance />} />
              <Route path="/projects/traceur" element={<Maintenance />} />
              <Route
                path="/projects/backpackers-buddy"
                element={<Maintenance />}
              />
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
