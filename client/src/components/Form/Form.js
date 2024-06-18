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
import { useNavigate } from "react-router-dom";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const post = useSelector((state) => currentId ? state.posts.posts.find((message) => message._id === currentId) : null);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(post) setPostData(post);
  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
    }
    else{
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
      
    }
    clear()
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  if (!user?.result?.name) {
    return (
      <StyledPaper>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
          </Typography>
      </StyledPaper>
    )
  }

  return (
    <StyledPaper elevation={6}>
      <StyledRoot>
        <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          
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
            multiline
            rows={4}
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
