import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { variables } from "../../../utils/variables";

const Preloader = () => (
  <Box sx={{ display: "flex" }}>
    <CircularProgress
      sx={{ color: `${variables.secondaryColor}` }}
      size={48}
      thickness={4}
    />
  </Box>
);

export default Preloader;
