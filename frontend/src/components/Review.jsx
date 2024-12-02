import React from "react";
import { Stack, Rating, Paper } from "@mui/material";

function Review({ name, rating, message, isFocused }) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "16px",
        margin: 4,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        transform: isFocused ? "scale(1.15)" : "scale(1)",
        transition: "transform 0.5s ease-in-out",
        userSelect: "none",
      }}
    >
      <Stack
        className="w-[150px] sm:w-[200px] h-[125px] sm:h-[175px]"
        gap={1}
        alignItems="center"
      >
        {/* Reviewer's name, rating, and comments */}
        <Rating value={rating} size="large" readOnly></Rating>
        <p className="text-sm text-center line-clamp-6 overflow-hidden text-ellipses">
          {message}
        </p>
      </Stack>
      <h1 className="text-md font-bold line-clamp-1 text-ellipses italic">
        {name}
      </h1>
    </Paper>
  );
}

export default Review;
