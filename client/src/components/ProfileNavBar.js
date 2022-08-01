import React from 'react';
import NewsFeed from './NewsFeed.js';
import CreatePost from "./CreatePost.js";
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import Profile from "./Profile.js";
import { useState } from "react"
import { Pets, Icons, Home, Message } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem, Stack } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


export default function Navbar ({currentUser}) {
    

  
// Material UI
const [open, setOpen] = useState(false)

const navigate = useNavigate()

const goBack = () => {
  navigate(-1)
}


// Materail UI 
  const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
  })

  const Icons = styled(Box)(({ theme }) => ({
    display:"flex" , alignItems:"center" , gap:"40px"
  }))

  // if currentUser == false, then render "Already Have an Account?" Login button/route
  
  // if currentUser == true, then render ...

  return (
    <div>
    <AppBar position="sticky" sx={{backgroundColor:"#33691e"}}>
        <StyledToolbar>
        <ArrowBackIosIcon 
            onClick={goBack}
            sx={{ "&:hover": {
              cursor: "pointer"
            },
          }}
          />
          <Icons>
            <Badge badgeContent={4} color="error">
                <Home/>
            </Badge>
            <Badge badgeContent={20} color="error">
                <Pets/>
            </Badge>
            <Badge badgeContent={5} color="error">
                <Message/>
            </Badge>
                <Avatar src="https://m.media-amazon.com/images/I/71kNvlpS9GL._AC_SS450_.jpg"
                onClick={e=>setOpen(true)}
                />
          </Icons>
        </StyledToolbar>
         <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e=>setOpen(false)}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
    <Box>
      <Stack direction="column" alignItems="center" justifyContent="space-evenly" spacing={0.5}>

      </Stack>
    </Box>
    </div>
  )
}