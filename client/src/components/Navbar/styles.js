import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { Typography, Avatar, AppBar, Toolbar } from "@mui/material";

// Styled Components
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 50px",
}));

export const StyledHeading = styled(Typography)({
  color: "rgba(0,183,255, 1)",
  textDecoration: "none",
});

export const StyledImage = styled("img")({
  marginLeft: "15px",
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "flex-end",
  width: "400px",
});

export const StyledProfile = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
});

export const StyledUserName = styled(Typography)({
  display: "flex",
  alignItems: "center",
});

export const StyledBrandContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const StyledPurple = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));
