import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./direction.css";
function ButtonEdit() {
  return (
    <Box>
      <Button
        variant="h6"
        sx={{
          
          pointerEvents: "none",
          
          color: "#F15F2B",
          border: "3px #F15F2B solid",
          bgcolor: "white",
          fontFamily: "yekan-bakh",
          fontSize: "23px",
          borderRadius: "45px",
          width: "438px",
          height: "64px",
          gap: "10px",
          padding: "16px, 177px, 16px, 177px",
        }}
      >
        تغییر پروژه
      </Button>
    </Box>
  );
}

export default ButtonEdit;
