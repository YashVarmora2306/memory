import React, { useState, useEffect } from "react";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { Container, Grow, Grid, TextField, Button } from "@mui/material";
import { MuiChipsInput } from "mui-chips-input";
import { StyledAppBarSearch, StyledGrid, StyledPagination } from "./styles";
import { useDispatch } from "react-redux";
import { getPosts, getPostsBySearch } from "../../actions/posts";
import Paginate from "../Pagination";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = () => {
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  const query = useQuery();

  const navigate = useNavigate();

  const page = query.get("page") || 1;

  const searchQuery = query.get("searchQuery");

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(",") }));
      navigate(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchPost();
    }
  };

  // const handleAdd = (tag) => setTags([...tags, tag]);
  const handleAdd = (tag) => {
    setTags(tag);
  };
  // const handleDelete = (tagToDelete) =>
  //   setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    <Grow in>
      <Container maxWidth="xl">
        <StyledGrid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={6} md={9}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <StyledAppBarSearch position="static" color="inherit">
              <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                onKeyDown={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <MuiChipsInput
                style={{ margin: "10px 0" }}
                value={tags}
                onChange={handleAdd}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchPost} variant="contained" color="primary">
                Search
              </Button>
            </StyledAppBarSearch>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            {!searchQuery && !tags.length && (
              <StyledPagination elevation={6}>
                <Paginate page={page} />
              </StyledPagination>
            )}
          </Grid>
        </StyledGrid>
      </Container>
    </Grow>
  );
};

export default Home;
