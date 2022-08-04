import React, { useState } from 'react';
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Pets, Home, Message } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem } from "@mui/material"


export default function Navbar ({setCurrentUser, currentUser}) {

// Material UI
const [open, setOpen] = useState(false)

const navigate = useNavigate();

// logout button
const handleLogOut = () => {
  // DELETE `/logout`
  fetch('/logout', {
    method: 'DELETE'
  })
  setCurrentUser(false)
  localStorage.clear();
  navigate("/")
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
            Whiskker
            </Typography>
              <Pets sx={{ display: { xs: "block", sm: "none" } }} />
          <Icons>
            <Badge color="primary" component={RouterLink} to="/newsfeed">
                <Home/>
            </Badge>
            <Badge color="primary" component={RouterLink} to="/mycatpanions">
                <Pets/>
            </Badge>
            <Badge color="primary" component={RouterLink} to="/messaging">
                <Message/>
            </Badge>
                <Avatar src={currentUser.purrfile_picture}
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
        <MenuItem component={RouterLink} to="/me" > Profile </MenuItem>
        <MenuItem component={RouterLink} to="/myaccount">My account</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </AppBar>
    {/* <Box>
      <Stack direction="column" alignItems="center" justifyContent="space-evenly" spacing={0.5}>
      </Stack>
    </Box> */}
    </div>
  )
}