import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Fab, Tooltip, Button, Modal, Box, Typography, styled, TextField, Avatar, Stack, InputAdornment } from "@mui/material";
import { Add } from "@mui/icons-material";
import { GiCat } from 'react-icons/gi';


//Material UI
const CustomModal = styled(Modal) ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box) ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const defaultValues = {
    user_id: undefined,
    description: "",
    image: "",
    like: 0,
}

export default function CreatePost({ currentUser, addPost }) {
    const [open, setOpen] = useState(false);
    const [postValues, setPostValues] = useState(defaultValues);
    const [reloadPage, setReloadPage] = useState(false);

    const navigate = useNavigate()

    const { purrfile_picture, bio, full_name, created_at} = currentUser

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostValues({
            ...postValues,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
            },
            body: JSON.stringify({...postValues, user_id: currentUser.id}),
          };
          fetch("/meow_posts", configObj)
          .then(res => {
            if (res.ok) {
              return res.json();
            }
            throw new Error('Could not create post. Try Again!');
          })
          .then((newPost) => addPost(newPost))
        setPostValues(defaultValues);
        setOpen(false)
        // setReloadPage((currentState) => !currentState)
        // window.location.reload(reloadPage)  
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
        <Tooltip onClick={e=>setOpen(true)}title="Create Post" sx={{position:"fixed", bottom:20, left: { xs: "calc(50% - 25px)", md:30 } }}>
            <Fab color="green" aria-label="add">
                <Add/>
            </Fab>
        </Tooltip>
        <Button></Button>
      <CustomModal
        open={open}
        onClose={e=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={280} bgcolor="white" borderRadius={3} p={8}>
            <Typography variant="h5" color="black" textAlign="center">
            Create A New Post
            </Typography>
        <UserBox>
            <Avatar alt={full_name} src={purrfile_picture}
            sx={{ width: 60, height: 60 }}
            />
                <Typography fontWeight={900} variant="span">{full_name}
                </Typography>
        </UserBox>
            <Stack direction="row" mt={2} mb={3} gap={1}>
                <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiCat/>
                        </InputAdornment>
                      ),
                    }}
                id="image"
                name="image"
                label="Add A Photo"
                type="text"
                value={postValues.image}
                onChange={handleChange}
                required
                />
            </Stack>
            <TextField
                sx={{ width: "100%" }}
                name="description"
                id="description"
                multiline
                rows={3}
                placeholder="Add a description"
                variant="standard"
                value={postValues.description}
                onChange={handleChange}
                required
                />
            <Stack>
                <Button onClick={handleSubmit}color="success"  display="center">POST</Button>
            </Stack>
        </Box>
      </CustomModal>
        </form>
        </>
    )
}