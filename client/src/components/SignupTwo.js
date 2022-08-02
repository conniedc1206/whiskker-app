// IGNORE THIS FILE, THIS WAS USED TO TEST AND SAVE THE SIGNUP PAGE FORMATS

// import React, { useState } from "react"
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { Grid, TextField, Button, InputAdornment, IconButton, Box, Paper } from "@mui/material"
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
// import { IoLogoOctocat } from 'react-icons/io';
// import { GiCat } from 'react-icons/gi';


// const defaultValues = {
//   full_name: '',
//   purrfile_picture: '',
//   username: '',
//   password: ''
// };

// export default function Signup( { updateUser }) {
//     const [formData, setFormData] = useState(defaultValues)
//     const [errors, setErrors] = useState([]);
//     const [showPassword, setShowPassword] = useState(false);

//     const navigate = useNavigate();

//     const {username, password, purrfile_picture, full_name} = formData

//     function onSubmit(e){
//       e.preventDefault()
//       const user = {
//           full_name,
//           purrfile_picture, 
//           username, 
//           password, 
//       }
//       fetch('/users', {
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//       })
//       .then(res => {
//           if(res.ok){
//               res.json().then(user => {
//                   // set current user here
//                   updateUser(user)
//                   // store the user in localStorage
//                   localStorage.setItem('user', JSON.stringify(user))
//                   // need to route user to their newsfeed page/home page
//                   navigate("/newsfeed")
//               })
//           } else {
//               res.json().then(json => setErrors(Object.entries(json.errors)))
//           }
//       })
//       setFormData(defaultValues)
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }

//     const handleClickShowPassword = () => {
//         setShowPassword((currentState) => !currentState);
//     };

//     // Material UI 
//     // const theme = createTheme();
//     const paperStyle = {padding: 20, height: "71vh", width:500, margin: "100px auto"  }

//   return (
//     <div style= {{ display: "inline-block", backgroundImage: 'url(https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg)', 
//     backgroundSize: "100%",
//     width: "100%",
//     backgroundReapeat: "no-repeat"
//     // width: '100vh', 
//     // height: "100vh",
//     // backgroundPosition: "center",
//     // backgroundRepeat: 'no-repeat'
//     }}>
//       <Grid>
//         <Paper elevation={10} sx={{ backgroundColor: "white", opacity:"80%"}} style={paperStyle}>
//       <Box>
//         <form onSubmit={onSubmit}>
//           <Grid
//             container
//             alignItems="center"
//             justify="center"
//             direction="column"
//             marginTop="2%"
//           >
//             <h2>Sign up and experience Whiskker today!</h2>
//             <br></br>
//             <br></br>
//             <Grid item marginBottom="2%">
//               <TextField
//                 InputLabelProps={{ shrink: true }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <GiCat/>
//                     </InputAdornment>
//                   ),
//                 }}
//                 id="full_name"
//                 name="full_name"
//                 label="Full Name"
//                 type="text"
//                 value={formData.full_name || ""}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item marginBottom="2%">
//               <TextField
//                 InputLabelProps={{ shrink: true }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <IoLogoOctocat />
//                     </InputAdornment>
//                   ),
//                 }}
//                 id="username"
//                 name="username"
//                 label="Username"
//                 type="text"
//                 value={formData.username || ""}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item marginBottom="2%">
//               <TextField
//                 InputLabelProps={{ shrink: true }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <InsertPhotoIcon />
//                     </InputAdornment>
//                   ),
//                 }}
//                 id="purrfile_picture"
//                 name="purrfile_picture"
//                 label="Purrfile Picture"
//                 type="text"
//                 value={formData.purrfile_picture || ""}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item marginBottom="5%">
//               <TextField
//                 InputLabelProps={{ shrink: true }}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="start"
//                       >
//                         {showPassword ? <Visibility /> : <VisibilityOff />}
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                 }}
//                 id="password"
//                 name="password"
//                 label="Password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password || ""}
//                 onChange={handleChange}
//                 required
//               />
//             </Grid>
//             <Grid item>
//               <Button type="submit" variant="contained" sx={{backgroundColor:"#33691e"}}>
//                 CREATE FREE ACCOUNT
//               </Button>
//             </Grid>
//             <Grid item sx={{ mt: 2 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{backgroundColor:"#33691e"}}
//               component={RouterLink}
//               to="/"
//             >
//               Login Instead
//             </Button>
//           </Grid>
//           <Grid item marginTop="20%" >
//             <h2>Thank you for joining Whiskker!</h2>
//           </Grid>
//           </Grid>
//         </form>
//         {/* <Grid container alignItems="center" justify="center" direction="column"> */}
//           {/* <Grid item sx={{ mt: 2 }}>
//             <Button
//               type="submit"
//               variant="contained"
//               sx={{backgroundColor:"#33691e"}}
//               component={RouterLink}
//               to="/"
//             >
//               Login Instead
//             </Button>
//           </Grid> */}
//           {/* <Grid marginTop="20%" >
//             <h2>Thank you for joining Whiskker!</h2>
//           </Grid> */}
//         {/* </Grid> */}
//         </Box>
//             </Paper>
//         </Grid>

//       {errors? errors.map(error => <div> {error[0]} {error[1]} </div>) :null}
    
// </div>
//   )
// }










// import React, { useState } from "react"
// import { Link as RouterLink, useNavigate } from "react-router-dom";
// import { Typography, Grid, TextField, Button, InputAdornment, IconButton, Box, Paper, FormControl, Input, InputLabel, FormHelperText } from "@mui/material"
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
// import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
// import { IoLogoOctocat } from 'react-icons/io';
// import { GiCat } from 'react-icons/gi';


// const defaultValues = {
//   full_name: '',
//   purrfile_picture: '',
//   username: '',
//   password: ''
// };

// const textColor = {
//   root: {
//     color: "#263238"
//   }
// };

// export default function Signup( { updateUser }) {
//     const [formData, setFormData] = useState(defaultValues)
//     const [errors, setErrors] = useState([]);
//     const [showPassword, setShowPassword] = useState(false);

//     const navigate = useNavigate();

//     const {username, password, purrfile_picture, full_name} = formData

//     function onSubmit(e){
//       e.preventDefault()
//       const user = {
//           full_name,
//           purrfile_picture, 
//           username, 
//           password, 
//       }
//       fetch('/users', {
//         method:'POST',
//         headers:{'Content-Type': 'application/json'},
//         body: JSON.stringify(user)
//       })
//       .then(res => {
//           if(res.ok){
//               res.json().then(user => {
//                   // set current user here
//                   updateUser(user)
//                   // store the user in localStorage
//                   localStorage.setItem('user', JSON.stringify(user))
//                   // need to route user to their newsfeed page/home page
//                   navigate("/newsfeed")
//               })
//           } else {
//               res.json().then(json => setErrors(Object.entries(json.errors)))
//           }
//       })
//       setFormData(defaultValues)
//     }

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData({ ...formData, [name]: value })
//     }

//     const handleClickShowPassword = () => {
//         setShowPassword((currentState) => !currentState);
//     };



//     // Material UI 
//     // const theme = createTheme();
//     const paperStyle = {padding: 20, height: "70vh", width:500, margin: "100px auto"  }

//   return (
//     <Box style={{ display: "inline-block", backgroundImage: `url(https://icatcare.org/app/uploads/2018/06/Layer-1704-1200x630.jpg)`,
//     backgroundSize: "100%",
//     width: "100%",
//     height: "100%",
//     position: "absolute", 
//     backgroundRepeat: "no-repeat" }}>
//       <Box style={{ display: "inline-block", backgroundColor: "blue", width: "100%", height: "100%", opacity: "30%"}}>
//         <Typography variant="h3" color={textColor.root} style={{ marginTop:"2%" }}>Join Whiskker Today</Typography>
//       </Box>
//     </Box>
//   )
// } 