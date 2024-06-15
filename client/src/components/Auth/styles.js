import { styled } from "@mui/material/styles";
import { Paper, Avatar, Button } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
}));

export const StyledRoot = styled("div")(({ theme }) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
}));

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: theme.palette.secondary.main,
}));

export const StyledForm = styled("form")(({ theme }) => ({
  width: "100%",
  marginTop: theme.spacing(3),
}));

export const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const StyledGoogleButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
