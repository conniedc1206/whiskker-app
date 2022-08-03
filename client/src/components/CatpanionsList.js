import React, { useEffect } from 'react'
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Grid, Paper } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { styled } from "@mui/material/styles";

function CatpanionsList( { currentUser, search, users } ) {

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
        }));

    function allUsers(){

        const friendIdsArray = []
        currentUser.friends?.map(friend => {
            return friendIdsArray.push(friend.id)
        })
        
        let allUsersArray = []
        const matchingUsers = users.filter(user => {
            return user.full_name.toLowerCase().includes(search.toLowerCase())
        })
        allUsersArray = matchingUsers
        const renderUsers = allUsersArray?.map(user => {
            return <Item key={user.id}>
                        <Grid container>
                            <Grid item>
                                <Avatar alt="Remy Sharp" src={user.purrfile_picture} sx={{ width: "95px", height: "95px" }}/>
                            </Grid>
                            <Grid item sx={{ flexGrow: 1 }}>
                                <h2>{user.full_name}</h2>
                                <h4>@{user.username}</h4>
                            </Grid>
                            <Grid item marginLeft="2%">
                                {friendIdsArray.includes(user.id) ? 
                                <>    
                                    <Button variant="contained" sx={ { borderRadius: 28, mr: 2, backgroundColor: "#33691e" } } component={RouterLink} to="/messaging">Message</Button>
                                    <Button variant="contained" sx={ { borderRadius: 28, backgroundColor: "#33691e" } } onClick={() => console.log(user.id)}>Unfriend</Button>
                                </>    
                                :
                                <Button variant="contained" sx={ { borderRadius: 28 } }>Add Friend</Button>
                            }
                            </Grid>
                        </Grid>
                    </Item>
        })
        return renderUsers
    }

    // IF the ID of the person searched for MATCHES any of the IDs in IDSARRAY,
    // render message and unfriend button, otherwise, render add friend button

  return (
    <Stack 
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        spacing={2}
        width="75%"
        marginLeft="5%">
        {search === "" ? currentUser.friends?.map(friend => (
            <Item>
                <Grid container>
                    <Grid item>
                        <Avatar alt="Remy Sharp" src={friend.purrfile_picture} sx={{ width: "95px", height: "95px" }}/>
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <h2>{friend.full_name}</h2>
                        <h4>@{friend.username}</h4>
                    </Grid>
                    <Grid item marginLeft="2%">
                        <Button variant="contained" sx={ { borderRadius: 28, mr: 2, backgroundColor: "#33691e" } } component={RouterLink} to="/messaging">Message</Button>
                        <Button variant="contained" sx={ { borderRadius: 28, backgroundColor: "#33691e" } } onClick={() => console.log(friend.id)}>Unfriend</Button>
                    </Grid>
                </Grid>
            </Item>
        ))
        :
            allUsers()
        }      
    </Stack>
  )
}

export default CatpanionsList