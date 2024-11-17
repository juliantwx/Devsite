import React, { useState } from "react";
import { scrollToBottom } from "../utils/ScrollUtils";
import { Stack, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const menuItems = ["home", "projects", "updates"];
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  return (
    <div className="fixed top-0 left-0 w-full bg-black p-4 z-1000 text-cream">
      <div className="sm:px-5">
        {/* Main Stack encapsulating all Navbar elements */}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          className="text-sm sm:text-base"
        >
          <img
            src="/images/SiteIconWhite.png"
            alt="Site's Icon"
            className="h-5 sm:h-6"
          />
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
                  onClick={() => navigate(item)}
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
    </div>
  );
}

export default Navbar;
