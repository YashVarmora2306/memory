import React from "react";

import {
  StyledBorder,
  StyledCard,
  StyledCardActions,
  StyledDetails,
  StyledFullHeightCard,
  StyledGrid,
  StyledMedia,
  StyledOverlay,
  StyledOverlay2,
  StyledTitle,
} from "./styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { Button, CardContent, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";

const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();

  return (
    <StyledCard>
      <StyledMedia image={post.selectedFile} title={post.title} />
      <StyledOverlay>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </StyledOverlay>
      <StyledOverlay2>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </StyledOverlay2>
      <StyledDetails>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </StyledDetails>
      <StyledTitle variant="h5" gutterBottom>
        {post.title}
      </StyledTitle>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.message}
        </Typography>
      </CardContent>
      <StyledCardActions>
        <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp; Like &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
