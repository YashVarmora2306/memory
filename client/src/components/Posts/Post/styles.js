import { styled } from "@mui/material/styles";
import { Card, CardMedia,CardContent, CardActions, Typography, ButtonBase } from "@mui/material";

export const StyledMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
});

export const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "450px",
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

export const StyledDetails = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  margin: "20px",
  height: "60px"
});

export const StyledTags = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
});

export const StyledTitle = styled(Typography)({
  padding: "0 16px",
  height: "50px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

export const StyledCardContent = styled(CardContent)({
  flexGrow: 3, 
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const StyledMessage = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  height: "60px",
});

export const StyledCardActions = styled(CardActions)({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});

export const StyledButtonBase = styled(ButtonBase)({
  display: "block",
  textAlign: "initial",
});