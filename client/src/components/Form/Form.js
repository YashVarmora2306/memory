import React, { useState, useEffect } from "react";
import {
  StyledRoot,
  StyledButtonSubmit,
  StyledFileInput,
  StyledForm,
  StyledPaper,
} from "./styles";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField, Typography } from "@mui/material";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectFile: "",
  });

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);

  const dispatch = useDispatch();

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    }
    else{
      dispatch(createPost(postData));
    }
    clear()
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectFile: ""
    });
  };

  return (
    <StyledPaper>
      <StyledRoot>
        <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setPostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          />
          <StyledFileInput>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </StyledFileInput>
          <StyledButtonSubmit
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </StyledButtonSubmit>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={clear}
            fullWidth
          >
            Clear
          </Button>
        </StyledForm>
      </StyledRoot>
    </StyledPaper>
  );
};

export default Form;
