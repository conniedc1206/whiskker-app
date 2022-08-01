import React, { useState } from 'react'
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid, CssBaseline, Paper, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {createTheme, ThemeProvider } from "@mui/material/styles";
import { create } from '@mui/material/styles/createTransitions';



const defaultValues = {
  username: "",
  password: "",
};

export default function Login({ updateUser }) {

  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState([]);
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };

    fetch("/login", configObj)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Incorrect CatMail or Pawsword. Try Again!');
    })
    .then((user) => {
      updateUser(user)
      navigate(`/users/${user.id}`)
    })
    .catch((error) => {
      alert(error)
    })
    setFormValues(defaultValues);
    };

  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };


  // Material UI 
  // const theme = createTheme()
  const paperStyle = {padding: 20, height: "40vh", width:500, margin: "100px auto"  }

  
  return (
    <>
    <div style= {{ backgroundImage: 'url(https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/img/article/orange-cat-with-long-whiskers-SW.jpg)', backgroundSize: "cover"}}>
        <Grid>
        <Paper elevation={10} sx={{ backgroundColor: "white", opacity:"85%" }} style={paperStyle}>
      <Box>
      <form onSubmit={handleSubmit}> 
      <Grid container alignItems="center" justify="center" direction="column" marginTop="2%">
      <br></br>
      <h2>Log in Whiskker</h2>
      <br></br>
      <br></br>
        <Grid item sx={{ mb: 2 }}>
          <TextField
           InputLabelProps={{ shrink: true }}
           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
            id="username"
            name="username"
            label="Username"
            type="text"
            value={formValues.username}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item marginBottom="4%">
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
              id="password-input"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={formValues.password || ""}
              onChange={handleChange}
              required
            />
          </Grid>
        <Button variant="contained" type="submit" sx={{backgroundColor:"#33691e"}}>
            Login
        </Button>
      </Grid>
    </form>
      <Grid container alignItems="center" justify="center" direction="column" sx={{mt: 2}}>
        <Grid item>New to Whiskker? 
          <Button variant="contained" type="submit" sx={{backgroundColor:"#33691e"}} component={RouterLink} to="/signup">
            Sign Up
          </Button>
        </Grid>
      </Grid>
      </Box>
      </Paper>
      </Grid>
      {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
      </div>
    </>
  );
}
