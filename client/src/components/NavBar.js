import React, { useState } from 'react';
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import Profile from "./Profile.js";
import NewsFeed from './NewsFeed.js';
import CreatePost from "./CreatePost.js";
import { Pets, Icons, Home, Message } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem, Stack } from "@mui/material"


export default function Navbar ({currentUser}) {

// Material UI
const [open, setOpen] = useState(false)

const navigate = useNavigate();

// logout button
const handleLogOut = () => {
  // DELETE `/logout`
  fetch('/logout', {
    method: 'DELETE'
  })
  updateUser(false)
  navigate("/login")
};
  

// Materail UI 
  const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
  })

  const Icons = styled(Box)(({ theme }) => ({
    display:"flex" , alignItems:"center" , gap:"40px"
  }))


  return (
    <div>
    <AppBar position="sticky" sx={{backgroundColor:"#33691e"}}>
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: {xs: "none", sm:"block" } }}>
            Whiskker App
            </Typography>
              <Pets sx={{ display: { xs: "block", sm: "none" } }} />
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
        <MenuItem component={RouterLink} to="/me"> Profile </MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
    <Box>
      <Stack direction="column" alignItems="center" justifyContent="space-evenly" spacing={0.5}>
    <NewsFeed/>
    <CreatePost/>
      </Stack>
    </Box>
    </div>
  )
}