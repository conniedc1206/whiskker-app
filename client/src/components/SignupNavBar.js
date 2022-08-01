import React from 'react'
import { AppBar, Toolbar, styled, Typography, Box, Grid, Button } from "@mui/material"
import { Pets } from "@mui/icons-material";
// import { IoLogoOctocat } from 'react-icons/io';

export default function SignupNavbar () {
  const StyledToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between",
  })

  return (
    <AppBar position="sticky" sx={{backgroundColor:"#33691e"}}>
        <StyledToolbar>
          <Typography variant="h6" sx={{ display: {xs: "none", sm:"block" } }}>
            <Pets/> Whiskker
            </Typography>
        </StyledToolbar>
    </AppBar>
  )
}