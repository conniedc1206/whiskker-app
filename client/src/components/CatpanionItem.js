import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Grid } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'

function CatpanionItem( { Item, friend, catpanions, currentUser } ) {

    const [disabled, setDisabled] = useState(false)

    function handleDeleteFriend(){
        const catpanionToDelete = catpanions?.find(catpanion => {
            if ((catpanion.user_id === currentUser.id) && (catpanion.friend_id === friend.id)){
                return catpanion.id
            }
        })
        fetch(`/catpanions/${catpanionToDelete.id}`, {method: "DELETE"})
        setDisabled(currentState => !currentState)
    }
  
    return (
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
                <Button variant="contained" disabled={disabled} sx={ { borderRadius: 28, mr: 2, backgroundColor: "#33691e" } } component={RouterLink} to="/messaging">Message</Button>
                <Button variant="contained" disabled={disabled} sx={ { borderRadius: 28, backgroundColor: "#33691e" } } onClick={handleDeleteFriend}>{disabled ? "Friend Removed" : "Unfriend"}</Button>
            </Grid>
        </Grid>
    </Item>
  )
}

export default CatpanionItem