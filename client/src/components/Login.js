import React, { useState } from 'react'
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const defaultValues = {
  email: "",
  password: "",
};

export default function Login({ updateUser }) {

  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false)
  
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

    fetch("/users", configObj)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Incorrect CatMail or Pawsword. Try Again!');
      })
      .then((data) => navigate(`/users/${data.id}`))
      .catch((error) => {
        alert(error)
      });

      setFormValues(defaultValues);
    };
  // navigate(`/dashboard/${data.id}`)

  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };

  

  return (
    <>
      <form onSubmit={handleSubmit}> 
      <Grid container alignItems="center" justify="center" direction="column" marginTop="2%">
      <h2>Log in Whiskker</h2>
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
            id="email"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </Grid>
      </Grid>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item marginBottom="1%">
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
        <Grid item>
          <Button variant="contained" type="submit" sx={{backgroundColor:"#33691e"}} component={RouterLink} to="/">
            Sign up instead
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
