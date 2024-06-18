import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { Typography, Avatar, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

// Styled Components
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledHeading = styled(Typography)(({ theme })=>({
  color: theme.palette.primary.main,
  textDecoration: "none",
  fontSize: "2em",
  fontWeight: 300,
}));

export const StyledImage = styled("img")({
  marginLeft: "10px",
  marginTop: "5px",
});

export const StyledToolbar = styled(Toolbar)(({ theme })=>({
  display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  [theme.breakpoints.down('sm')]: {
    width: 'auto',
  },
}));

export const StyledProfile = styled("div")(({ theme })=>({
  display: "flex",
  justifyContent: "space-between",
  width: "400px",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    width: "auto",
    marginTop: 20,
    justifyContent: "center",
  },
}));

export const StyledUserName = styled(Typography)({
  display: "flex",
  alignItems: "center",
  textAlign: "center",
});

export const StyledBrandContainer = styled(Link)({
  display: "flex",
  alignItems: "center",
});

export const StyledPurple = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[500]),
  backgroundColor: deepPurple[500],
}));
