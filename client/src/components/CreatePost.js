import React from 'react';
import { useState } from "react";
import Posts from "./Posts.js";
import { Fab, Tooltip, Button, Modal, Box, Typography, styled, TextField, Avatar, Stack, IconButton } from "@mui/material";
import { Add, PhotoCamera } from "@mui/icons-material";
import { green } from '@mui/material/colors';

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

export default function CreatePost() {



    //Material UI
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);
    const color = green[100];


    return (
        <>
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
            What's on Your Mind?
            </Typography>
        <UserBox>
            <Avatar src="https://m.media-amazon.com/images/I/71kNvlpS9GL._AC_SS450_.jpg"
            sx={{ width: 60, height: 60 }}
            />
                <Typography fontWeight={900} variant="span">Sally Cat
                </Typography>
        </UserBox>
            <TextField
                sx={{ width: "100%" }}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="Add description here"
                variant="standard"
                />
            <Stack direction="row" mt={2} mb={3} gap={1}>
                <IconButton color="success" aria-label="upload picture" component="label">
                    <input hidden accept="image/*" type="file"/>
                    <PhotoCamera display="center" />
                </IconButton>
            </Stack>
            <Stack>
                <Button color="success"  display="center">POST</Button>
            </Stack>
        </Box>
      </CustomModal>
      </>
    )
}