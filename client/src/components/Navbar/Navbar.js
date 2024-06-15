import React, { useEffect, useState } from "react";
import memories from "../../images/memories.png";
import {
  StyledAppBar,
  StyledHeading,
  StyledImage,
  StyledToolbar,
  StyledProfile,
  StyledUserName,
  StyledBrandContainer,
  StyledPurple,
} from "./styles";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    setUser(null);
  };


  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = jwtDecode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return (
    <StyledAppBar position="static" color="inherit">
      <StyledBrandContainer>
        <StyledHeading component={Link} to="/" variant="h2" align="center">
          Memories
        </StyledHeading>
        <StyledImage src={memories} alt="memories" height={60} />
          </StyledBrandContainer>
          <StyledToolbar>
              {user ? (
                  <StyledProfile>
                      <StyledPurple alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</StyledPurple>
                      <StyledUserName variant="h6">{user.result.name}</StyledUserName>
                      <Button variant="contained" color="secondary" onClick={logout}>Logout</Button>
              </StyledProfile>
              ) : (
                      <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
              )}
          </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
