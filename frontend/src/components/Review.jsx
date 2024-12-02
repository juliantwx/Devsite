import React from "react";
import { Stack, Rating, Paper } from "@mui/material";

function Review({ name, rating, message, focusLevel }) {
  return (
    <Paper
      elevation={3}
      sx={{
        borderRadius: "16px",
        marginY: 4,
        marginX: 1,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        transform:
          focusLevel === 0
            ? "scale(1)"
            : Math.abs(focusLevel) === 1
            ? "scale(0.9)"
            : "scale(0.8)",
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
        <p className="text-xs sm:text-sm line-clamp-5 sm:line-clamp-6 text-center overflow-hidden text-ellipses">
          {message}
        </p>
      </Stack>
      <h1 className="text-sm font-bold line-clamp-1 text-ellipses italic">
        {name}
      </h1>
    </Paper>
  );
}

export default Review;
