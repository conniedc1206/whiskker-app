import React from 'react'
import { Pets, Icons, Home, Message } from "@mui/icons-material";
import { AppBar, Toolbar, styled, Typography, Box, Badge, Avatar, Menu, MenuItem } from "@mui/material"
import { useState } from "react"


export default function Navbar () {
    
// Material UI
const [open, setOpen] = useState(false)


// Materail UI 
  const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
  })

  const Icons = styled(Box)(({ theme }) => ({
    // backgroundColor: "grey",
    display:"flex" , alignItems:"center" , gap:"40px"
    // padding:
  }))


  return (
    <AppBar position="sticky">
      {/* <Toolbar> */}
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: {xs: "none", sm:"block" } }}>
            Whiskerr App
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
        <MenuItem>Profile</MenuItem>
        {/* onClick={handleClose} */}
        <MenuItem>My account</MenuItem>
        {/* onClick={handleClose} */}
        <MenuItem>Logout</MenuItem>
        {/* onClick={handleClose} */}
      </Menu>

      {/* </Toolbar> */}
    </AppBar>
  )
}