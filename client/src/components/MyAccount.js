import React, { useState } from 'react'
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment, IconButton } from "@mui/material"
import { IoLogoOctocat } from 'react-icons/io';
import { GiCat } from 'react-icons/gi';

function MyAccount({currentUser}) {
    const {username, purrfile_picture, full_name, bio } = currentUser

    const defaultValues = {
      full_name: full_name,
      purrfile_picture: purrfile_picture,
      username: username,
      bio: bio
    };

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
        console.log(formValues)
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({...formValues})
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
        
        <Grid style={{ display: "inline-block", backgroundImage: `url(https://i.imgur.com/m8NVI9B.png)`,
    backgroundSize: "cover",
    backgroundAttachment: "fixed-right",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat",
    }}>
      <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
        <Grid style={{ width: "25vw", height: "50vh", margin: "auto", marginTop: "13%"}}>
          <form onSubmit={handleSubmit}>
            <Grid container 
            alignItems="center"
            justify="center"
            direction="column"
            margin="auto">
              <h2 style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>Edit My Whiskkers Account</h2>
              <Grid item margin="auto" marginTop="5%" marginBottom="2%">
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
                    value={formValues.full_name}
                    onChange={handleChange}
                    
                  />
              </Grid>
              <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
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
                  value={formValues.username}
                  onChange={handleChange}
                  
                />
              </Grid>
              <Grid item margin="auto" marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <InsertPhotoIcon /> */}
                      <GiCat/>
                    </InputAdornment>
                  ),
                }}
                id="purrfile_picture"
                name="purrfile_picture"
                label="Purrfile Picture"
                type="text"
                value={formValues.purrfile_picture}
                onChange={handleChange}
                
              />
            </Grid>
             <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoLogoOctocat />
                      </InputAdornment>
                    ),
                  }}
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  value={formValues.bio}
                  onChange={handleChange}
                  
                />
              </Grid>
            <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
              <Button type="submit" variant="contained" sx={{backgroundColor:"#33691e"}}
                onSubmit={handleSubmit}>
                EDIT
              </Button>
            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
          
        </div>
  )
}

export default MyAccount