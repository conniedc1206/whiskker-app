import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Grid, Box } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'

function CatpanionSearchItem( { user, catpanions, currentUser, Item } ) {

    const [searchDisabled, setSearchDisabled] = useState(false)
    const [friendDisabled, setFriendDisabled] = useState(false)

    const friendIdsArray = []
    currentUser.friends?.map(friend => {   
        return friendIdsArray.push(friend.id)
    })
  
    return (
        <Item key={user.id}>
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
                        <Button variant="contained" 
                            disabled={searchDisabled} 
                            sx={ { borderRadius: 28, mr: 2, backgroundColor: "#33691e" } } 
                            component={RouterLink} 
                            to="/messaging"
                        >Message</Button>
                        <Button variant="contained" 
                            disabled={searchDisabled} 
                            sx={ { borderRadius: 28, backgroundColor: "#33691e" } } 
                            onClick={
                                function handleDeleteFriend(){
                                    const catpanionToDelete = catpanions?.find(catpanion => {
                                        if ((catpanion.user_id === currentUser.id) && (catpanion.friend_id === user.id)){
                                            return catpanion.id
                                        }
                                    })
                                    fetch(`/catpanions/${catpanionToDelete.id}`, {method: "DELETE"})
                                    setSearchDisabled(currentState => !currentState)
                                }
                        }>Remove Friend</Button>
                    </>
                    :
                    <>
                        {friendDisabled ? <Button variant="contained" sx={ { borderRadius: 28, mr: 2 } } component={RouterLink} to="/messaging">Message</Button> : null}
                        <Button variant="contained" disabled={friendDisabled} sx={ { borderRadius: 28 } } onClick={
                            function handleAddFriend(){
                                fetch(`/catpanions`, {
                                    method: 'POST',
                                    headers: {
                                        "Accept": "application/json",
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({user_id: currentUser.id, friend_id: user.id}),
                                })
                                setFriendDisabled(currentState => !currentState)
                            }
                        }>{friendDisabled ? "Added <3" : "Add friend"}</Button>
                    </>
                    }
                </Grid>
            </Grid>
        </Item>
  )
}

export default CatpanionSearchItem