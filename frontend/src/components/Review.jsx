import React from "react";
import { Stack, Rating, Paper } from "@mui/material";

function Review({ name, rating, message }) {
  return (
    <Paper elevation={3} sx={{ borderRadius: "16px", padding: 4 }}>
      <Stack className="w-[400px] sm:w-[700px]" gap={1} alignItems="center">
        <Stack direction="row" gap={3} alignItems="center">
          <p className="text-6xl">{name}</p>
          <Rating value={rating} size="large" readOnly></Rating>
        </Stack>
        <p className="text-xl text-center">
          <span className="absolute text-3xl -translate-x-3 -translate-y-1">
            &ldquo;
          </span>
          {message}
          <span className="absolute text-3xl translate-x-1 translate-y-0">
            &rdquo;
          </span>
        </p>
      </Stack>
    </Paper>
  );
}

export default Review;
