import React, { useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment, IconButton, Box, Paper, Avatar } from "@mui/material"
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import { IoLogoOctocat } from 'react-icons/io';
import { GiCat } from 'react-icons/gi';
import {createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';


const defaultValues = {
  full_name: '',
  purrfile_picture: '',
  bio: '',
  username: '',
  password: ''
};

export default function Signup( { updateUser }) {
    const [formData, setFormData] = useState(defaultValues)
    const [errors, setErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const {username, password, purrfile_picture, bio, full_name} = formData

    function onSubmit(e){
      e.preventDefault()
      const user = {
          full_name,
          purrfile_picture, 
          bio, 
          username, 
          password, 
      }
      fetch('/users', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(user)
      })
      .then(res => {
          if(res.ok){
              res.json().then(user => {
                  console.log(user)
                  // set current user here
                  updateUser(user)
                  // need to route user to their newsfeed page/home page
                  navigate(`/users/${user.id}`)
              })
          } else {
              res.json().then(json => setErrors(Object.entries(json.errors)))
          }
      })
      setFormData(defaultValues)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleClickShowPassword = () => {
        setShowPassword((currentState) => !currentState);
    };

    // Material UI 
    // const theme = createTheme();
    const paperStyle = {padding: 20, height: "100vh", width:500, margin: "100px auto"  }

  return (
    <div style= {{ backgroundImage: 'url(https://st3.depositphotos.com/1177973/12632/i/950/depositphotos_126325932-stock-photo-many-cats-background.jpg)', 
    backgroundSize: "cover",
    position: "relative", 
    // width: '100vh', 
    // height: "100vh",
    // backgroundPosition: "center",
    // backgroundRepeat: 'no-repeat'
    }}>
      <Grid>
        <Paper elevation={10} sx={{ backgroundColor: "white", opacity:"85%"}} style={paperStyle}>
      <Box>
        <form onSubmit={onSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            marginTop="2%"
          >
            <br></br>
            <h2>Sign up and experience Whiskker today!</h2>
            <br></br>
            <br></br>
            <Grid item marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <GiCat/>
                    </InputAdornment>
                  ),
                }}
                id="full_name"
                name="full_name"
                label="Full Name"
                type="text"
                value={formData.full_name || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <InsertPhotoIcon />
                    </InputAdornment>
                  ),
                }}
                id="purrfile_picture"
                name="purrfile_picture"
                label="Purrfile Picture"
                type="text"
                value={formData.purrfile_picture || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ViewHeadlineIcon />
                    </InputAdornment>
                  ),
                }}
                id="bio"
                name="bio"
                label="Bio"
                type="text"
                value={formData.bio || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoLogoOctocat />
                    </InputAdornment>
                  ),
                }}
                id="username"
                name="username"
                label="Username"
                type="text"
                value={formData.username || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item marginBottom="5%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="start"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formData.password || ""}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" sx={{backgroundColor:"#33691e"}}>
                CREATE FREE ACCOUNT
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{backgroundColor:"#33691e"}}
              component={RouterLink}
              to="/"
            >
              Login Instead
            </Button>
          </Grid>
        </Grid>
        </Box>
            </Paper>
        </Grid>

      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    
</div>
  )
}