import React, { useEffect, useRef, useState } from "react";
import {
  StyledCommentInnerContainer,
  StyledCommentOuterContainer,
} from "./styles";
import { Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { commentPost } from "../../actions/posts";

const CommentSection = ({ post }) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const [comments, setComments] = useState(post?.comments);
  const commentsRef = useRef(null);

  const handleComment = async () => {
    const newComments = await dispatch(
      commentPost(`${user?.result?.name}: ${comment}`, post._id)
    );

    setComments(newComments);
    setComment("");
  };

  useEffect(() => {
        commentsRef.current.scrollIntoView({ behavior: "smooth", block: 'nearest', });
  }, [comments]);

  return (
    <div>
      <StyledCommentOuterContainer>
        <StyledCommentInnerContainer>
          <Typography gutterBottom variant="h6">
            Comments
          </Typography>
          {comments.map((c, i) => (
            <Typography key={i} gutterBottom variant="subtitle1">
              <strong>{c.split(":")[0]} : </strong>
              {c.split(":")[1]}
            </Typography>
          ))}
          <div ref={commentsRef} />
        </StyledCommentInnerContainer>
        {user?.result?.name && (
          <div style={{ width: "70%" }}>
            <Typography gutterBottom variant="h6">
              Write a Comment
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              label="Comment"
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Button
              style={{ marginTop: "10px" }}
              fullWidth
              disabled={!comment}
              variant="contained"
              color="primary"
              onClick={handleComment}
            >
              Comment
            </Button>
          </div>
        )}
      </StyledCommentOuterContainer>
    </div>
  );
};

export default CommentSection;
