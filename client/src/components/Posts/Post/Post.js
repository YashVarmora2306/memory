import React from "react";
import {
  StyledCard,
  StyledCardActions,
  StyledDetails,
  StyledMedia,
  StyledOverlay,
  StyledOverlay2,
  StyledTags,
  StyledTitle,
  StyledMessage,
  StyledCardContent,
  StyledButtonBase,
} from "./styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpAltOutlined from "@mui/icons-material/ThumbDownAltOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { useNavigate } from "react-router-dom";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post?.likes?.length > 0) {
      return post.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {post.likes.length >= 2
            ? `You and ${post.likes.length - 1} others`
            : `${post.likes.length} like${post.likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{post.likes.length} {post.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  const openPost = () => navigate(`/posts/${post._id}`);

  return (
    <StyledCard raised elevation={6}>
      <StyledButtonBase onClick={openPost}>
        <StyledMedia image={post.selectedFile} title={post.title} />
        <StyledOverlay>
          <Typography variant="h6">{post.name}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </StyledOverlay>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <StyledOverlay2>
            <Button
              style={{ color: "white" }}
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(post._id)
              }}
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </StyledOverlay2>
        )}
        <StyledDetails>
          <StyledTags variant="body2" color="textSecondary">
            {post.tags.map((tag) => `#${tag} `)}
          </StyledTags>
        </StyledDetails>
        <StyledTitle variant="h5" gutterBottom>
          {post.title}
        </StyledTitle>
        <StyledCardContent>
          <StyledMessage variant="body2" color="textSecondary" component="p">
            {post.message}
          </StyledMessage>
        </StyledCardContent>
      </StyledButtonBase>
      <StyledCardActions>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likePost(post._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator ||
          user?.result?._id === post?.creator) && (
          <Button
            size="small"
            color="error"
            onClick={() => dispatch(deletePost(post._id))}
          >
            <DeleteIcon color="error"  fontSize="small" />
            Delete
          </Button>
        )}
      </StyledCardActions>
    </StyledCard>
  );
};

export default Post;
