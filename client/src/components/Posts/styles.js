import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const StyledSmMargin = styled(Grid)(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const StyledActionDiv = styled(Grid)({
  textAlign: "center",
});
