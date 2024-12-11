"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { red, green, blue } from "@mui/material/colors";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Root = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    backgroundColor: red[500],
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: blue[500],
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: green[500],
  },
}));

export default function TestTable() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return <>{isMobile ? <div>Mobile view</div> : <div>Desktop View</div>}</>;
}
