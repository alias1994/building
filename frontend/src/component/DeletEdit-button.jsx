import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Edit from "@mui/icons-material/Edit";
import DeleteRounded from "@mui/icons-material/DeleteRounded";
import "./direction.css";
const DelEdiBut = () => {
  return (
    <Box>
      <Button
        variant="h6"
        startIcon={<DeleteRounded sx={{ margin: 1, color: "#F15F2B" }} />}
        sx={{
          pointerEvents: "none",
          color: "#F15F2B",
          border: "3px #F15F2B solid",
          bgcolor: "white",
          fontFamily: "yekan-bakh",
          fontSize: "16px",
          borderRadius: "15px",
          gap: "1px",
        }}
      >
        حذف
      </Button>

      <Button
        variant="h6"
        startIcon={<Edit sx={{ margin: 1, color: "#9E9E9E" }} />}
        sx={{
          pointerEvents: "none",
          color: "#9E9E9E",
          border: "3px #9E9E9E solid",
          bgcolor: "white",
          fontFamily: "yekan-bakh",
          fontSize: "16px",
          borderRadius: "15px",
          gap: "1px",
        }}
      >
        ویرایش
      </Button>
    </Box>
  );
};

export default DelEdiBut;
