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
import Project from "./pages/Project";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";
import Messages from "./pages/Messages";

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
              <Route path="/work" element={<Work />} />
              <Route path="/projects" element={<Projects />} />
              {/* Routes to projects' page */}
              <Route path="/projects/claw-stars" element={<Project />} />
              <Route path="/projects/color-launch" element={<Project />} />
              <Route path="/projects/go-gold-castle" element={<Project />} />
              <Route path="/projects/trapped" element={<Project />} />
              <Route path="/projects/survive!" element={<Project />} />
              <Route path="/projects/box-mania" element={<Project />} />
              <Route path="/projects/traceur" element={<Project />} />
              <Route path="/projects/today-i-learned" element={<Project />} />
              <Route
                path="/projects/alice-electronic-bike-shop"
                element={<Project />}
              />
              <Route path="/projects/soil" element={<Project />} />
              <Route path="/projects/backpackers-buddy" element={<Project />} />
              <Route path="/projects/dine-seal" element={<Project />} />
              <Route path="/messages" element={<Messages />} />
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
