import React, { useState } from "react";
import { scrollToBottom } from "../utils/ScrollUtils";
import { Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const menuItems = [
    {
      name: "HOME",
      description:
        "Explore the homepage and get an overview of my portfolio journey.",
      action: () => navigate("home"),
    },
    {
      name: "PROJECTS",
      description:
        "Dive into my collection of projects, showcasing expertise in full-stack and game development.",
      subMenu: {
        "Full-Stack Development": [
          "SOIL",
          "Backpacker's Buddy",
          "Alice's Electronic Bike Shop",
        ],
        "Game Development": [
          "ClawStars",
          "Mobfish Hunter",
          "Color Launch",
          "Box Mania",
        ],
      },
    },
    {
      name: "UPDATES",
      description:
        "Stay updated with the latest enhancements and upcoming features of my portfolio.",
      action: () => navigate("updates"),
    },
    {
      name: "CONTACT ME",
      description:
        "Reach out to connect or collaborate — find all my contact details here.",
      action: () => scrollToBottom(),
    },
  ];

  const [isHovering, setIsHovering] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <div className="relative" onMouseLeave={() => setIsHovering(false)}>
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
                    className={`transition-opacity duration-200 ease-out hover:text-amber ${
                      isHovering ? "opacity-35" : "opacity-100"
                    }`}
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
                  className={`transition-opacity duration-200 ease-out hover:text-amber ${
                    isHovering &&
                    activeMenuItem &&
                    activeMenuItem.name !== item.name
                      ? "opacity-35"
                      : "opacity-100"
                  }`}
                  onClick={() => item.action?.()} // Execute the item's action if it is declared
                  onMouseEnter={() => {
                    setIsHovering(true);
                    setActiveMenuItem(item);
                  }}
                >
                  {item.name}
                </button>
              </React.Fragment>
            ))}
          </Stack>
        </Stack>
      </div>
      {/* Navigation Menu that slides out on hover */}
      <div
        className={`transition-transform duration-500 ${
          isHovering ? "ease-out" : "ease-in"
        } fixed left-0 w-full bg-black text-cream p-4 z-40 ${
          isHovering ? "translate-y-16" : "-translate-y-full"
        }`}
      >
        {/* Sub-Menu's description */}
        {activeMenuItem && <p>{activeMenuItem.description}</p>}
        {/* Sub-Menu's contents */}
        {activeMenuItem?.subMenu &&
          Object.entries(activeMenuItem.subMenu).map(([key, value]) => (
            <div key={key}>
              <h4>{key}</h4>
              {value.length > 0 ? (
                value.map((item, index) => <p key={index}>{item}</p>)
              ) : (
                <p>No items available</p>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Navbar;
