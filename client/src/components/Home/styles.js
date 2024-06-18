import { styled } from "@mui/material/styles";
import { Grid, Paper, AppBar } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
  },
}));

export const StyledPagination = styled(Paper)(({ theme }) => ({
  borderRadius: 4,
  marginTop: "1rem",
  padding: "16px",
}));

export const StyledAppBarSearch = styled(AppBar)(({ theme }) => ({
  borderRadius: 4,
  marginBottom: "1rem",
  display: "flex",
  padding: "16px",
}));
