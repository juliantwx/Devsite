import React from "react";
import { scrollToBottom } from "../utils/ScrollUtils";
import { Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const menuItems = ["home", "projects", "updates"];

  return (
    <div className="fixed top-0 left-0 w-full bg-black p-4 z-1000">
      <div className="px-5">
        {/* Main Stack encapsulating all Navbar elements */}
        <Stack
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <h1 className="text-2xl text-cream font-semibold">Jtwx's</h1>
          {/* URL Button Stack */}
          <Stack
            flexDirection="row"
            gap={3}
            justifyContent="center"
            flexGrow={1}
          >
            {/* Display a button for each Menu Item */}
            {menuItems.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant="contained"
                  onClick={() => navigate(item)}
                >
                  {item}
                </Button>
              );
            })}
          </Stack>
          <Button variant="contained" onClick={scrollToBottom}>
            Contact Me
          </Button>
        </Stack>
      </div>
    </div>
  );
}

export default Navbar;
