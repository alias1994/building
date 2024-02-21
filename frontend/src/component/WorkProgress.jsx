import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Paper, Typography } from "@mui/material";

const WorkProgress = () => {
  return (
    <Paper
      sx={{
        width: "1192px",
        height: "70px",
        bgcolor: "#F3F3F3",
      }}
    >
      <Typography
        sx={{
          direction: "rtl",
          fontSize: "28px",
          position: "relative",
          right: "15%",
          bottom: "-10px",
        }}
      >
        کارهای در دست انجام
      </Typography>
      <Button
        sx={{
          direction: "ltr",
          fontSize: "28px",
          position: "relative",
          right: "-90px",
          bottom: "40px",
          color: "#F15F2B",
          border: "1px #F15F2B solid",
        }}
      >
        مشاهده همه
      </Button>
    </Paper>
  );
};
export default WorkProgress;
