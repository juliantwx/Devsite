import React from "react";
import { CircularProgress } from "@mui/material";

function LoadingOverlay() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <CircularProgress
        style={{
          width: "5vw",
          height: "5vw",
          color: "#e7ded9",
        }}
      />
    </div>
  );
}

export default LoadingOverlay;
