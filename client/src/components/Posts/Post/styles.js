import { styled } from "@mui/material/styles";
import { Card, CardMedia, CardActions, Grid, Typography } from "@mui/material";

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const StyledBorder = styled("div")({
  border: "solid",
});

export const StyledFullHeightCard = styled(Card)({
  height: "100%",
});

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
});

export const StyledOverlay = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const StyledOverlay2 = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const StyledGrid = styled(Grid)({
  display: "flex",
});

export const StyledDetails = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const StyledTitle = styled(Typography)({
  padding: "0 16px",
});

export const StyledCardActions = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
