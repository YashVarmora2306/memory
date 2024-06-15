import React, { useState } from "react";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  StyledPaper,
  StyledRoot,
  StyledAvatar,
  StyledForm,
  StyledSubmitButton,
  StyledGoogleButton,
} from "./styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Input from "./Input";
import Icon from "./icon";
import { jwtDecode } from "jwt-decode";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [isSignup, setIsSignup] = useState(false);

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(formData, navigate));
    } else {
      dispatch(signin(formData, navigate));
   }
  };
  
  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };
  
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const profileObj = jwtDecode(res.credential);
    console.log(profileObj);
    const { email, family_name, given_name, sub, picture, name } = profileObj;
    const result = {
      email,
      familyName: family_name,
      givenName: given_name,
      googleId: sub,
      imageUrl: picture,
      name,
    };
    const token = res.credential;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profile;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: "AUTH", data: { result, token } });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };

  return (
    <Container component="main" maxWidth="xs">
      <StyledPaper elevation={3}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography variant="h5">{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <StyledForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <StyledSubmitButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </StyledSubmitButton>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
            <GoogleLogin
              render={(renderProps) => (
                <StyledGoogleButton
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                  can
                >
                  Google Sign In
                </StyledGoogleButton>
              )}
              onSuccess={googleSuccess}
              onError={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </GoogleOAuthProvider>
          <Grid container justifyContent="flex-end">
            <Button onClick={switchMode}>
              {isSignup
                ? "Already have an account ? Sign In"
                : "Don't have an account? Sign Up"}
            </Button>
          </Grid>
        </StyledForm>
      </StyledPaper>
    </Container>
  );
};

export default Auth;
