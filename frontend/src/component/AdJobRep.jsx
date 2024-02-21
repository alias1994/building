import React from "react";
import { Box, TextField } from "@mui/material";
// import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";

function AddJobReport() {
  return (
    <Grid
      sx={{
        height: "501px",
        width: "542px",
        bgcolor: "white",
        borderRadius: "30px",
        fontSize: "36px",
      }}
      container
      direction="column"
      alignItems="center"
      justify="center"
      margin={40}
    >
      <Grid minHeight={60} />
      افزودن گزارش کار
    </Grid>
  );
}

export default AddJobReport;
