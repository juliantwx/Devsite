import React, { useState } from "react";
import { scrollToBottom } from "../utils/ScrollUtils";
import { Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const menuItems = ["home", "projects", "updates"];
  const [isHovering, setIsHovering] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        setIsHovering(true);
        console.log("isHovering");
      }}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="fixed top-0 left-0 w-full bg-black text-cream py-4 px-4 sm:px-10 z-50">
        {/* Main Stack encapsulating all Navbar elements */}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          className="text-sm sm:text-base"
        >
          <button
            className="transition-colors hover:text-amber"
            onClick={() => navigate("home")}
          >
            <img
              src="/images/SiteIconWhite.png"
              alt="Site's Icon"
              className="h-5 sm:h-6"
            />
          </button>
          {/* URL Button Stack */}
          <Stack
            flexDirection="row"
            gap={{ xs: 1.25, sm: 3 }}
            justifyContent="center"
            flexGrow={1}
          >
            {/* Display a button for each Menu Item */}
            {menuItems.map((item, index) => (
              <React.Fragment key={index}>
                {index !== 0 && (
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    sx={{
                      height: "1.5rem",
                      borderColor: "#e7ded9",
                    }}
                  />
                )}
                <button
                  key={index}
                  className="transition-colors hover:text-amber"
                  // onClick={() => navigate(item)}
                  onMouseEnter={() => setActiveMenuItem(item)}
                  onMouseLeave={() => setActiveMenuItem(null)}
                >
                  {item.toUpperCase()}
                </button>
              </React.Fragment>
            ))}
          </Stack>
          <button
            className="transition-colors hover:text-amber"
            onClick={scrollToBottom}
          >
            CONTACT ME
          </button>
        </Stack>
      </div>
      {/* Navigation Menu that slides out on hover */}
      <div
        className={`transition-transform duration-500 ease-out fixed left-0 w-full bg-black text-cream p-4 z-40 ${
          activeMenuItem ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        {`This is the slide out menu for ${activeMenuItem}`}
      </div>
    </div>
  );
}

export default Navbar;
