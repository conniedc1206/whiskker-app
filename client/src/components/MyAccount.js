import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";

const defaultValues = {
    purrfile_picture: "",
    bio: "",
};

function MyAccount({currentUser}) {
    const [formValues, setFormValues] = useState(defaultValues);
    
    const navigate = useNavigate()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });
    };

    // console.log(formValues)

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formValues)
        };
        fetch(`/users/${currentUser.id}`, configObj)
          .then((res) => res.json())
          .then((data) => 
          navigate('/me')
        )
        setFormValues(defaultValues);
      };
    
    return (
        <div>
        <form onSubmit={handleSubmit}>
        <Box container sx={{ padding: "15px", m:2, border:1, height: "400px", width:"80%", borderRadius: 2 }}>
            <Grid container alignItems="center" justify="center" direction="column" margin="2%">
            <Typography sx={{ fontFamily: "Monospace", mb: 1 }} variant="h4" component="arial">Update My Account</Typography>
              <Grid item marginBottom="1%">
                <TextField
                sx={{ mb: 1 }}
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                      </InputAdornment>
                    )
                  }}
                  id="purrfile_picture"
                  name="purrfile_picture"
                  label="Purrfile Picture"
                  type="text"
                  value={formValues.purrfile_picture}
                  onChange={handleChange}
                  required
                  />
              </Grid>
              <Grid item marginBottom ="1%">
                <TextField
                  sx={{ mb: 1 }}
                  InputLabelProps={{ shrink: true }}
                  InputProps= {{
                    startAdornment: (
                      <InputAdornment position="start">
                      </InputAdornment>
                    )
                  }}
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  value={formValues.bio}
                  onChange={handleChange}
                  />
              </Grid>
              <Button variant="contained" color="secondary" type="submit">
                Submit
              </Button>
              </Grid>
          </Box>
          </form>
        </div>
  )
}

export default MyAccount