import React, { useEffect, useState } from 'react'
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { Grid, Paper } from "@mui/material"
import { Link as RouterLink } from 'react-router-dom'
import { styled } from "@mui/material/styles";
import CatpanionItem from "./CatpanionItem.js"

function CatpanionsList( { currentUser, search, users, catpanions } ) {

    const [loggedInUser, setLoggedInUser] = useState({})
    const [searchDisabled, setSearchDisabled] = useState(false)

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
        }));

    useEffect(() => {
        fetch(`/users/${currentUser.id}`)
        .then(res => res.json())
        .then(setLoggedInUser)
    }, [catpanions])

    function allUsers(){

        const friendIdsArray = []
        loggedInUser.friends?.map(friend => {
            return friendIdsArray.push(friend.id)
        })
        
        let allUsersArray = []
        const matchingUsers = users.filter(user => {
            return user.full_name.toLowerCase().includes(search.toLowerCase())
        })

        console.log(matchingUsers)
        console.log(allUsersArray)

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
                                    <Button variant="contained" disabled={searchDisabled} sx={ { borderRadius: 28, mr: 2, backgroundColor: "#33691e" } } component={RouterLink} to="/messaging">Message</Button>
                                    <Button variant="contained" disabled={searchDisabled} sx={ { borderRadius: 28, backgroundColor: "#33691e" } } onClick={
                                        function handleDeleteFriend(){
                                            const catpanionToDelete = catpanions?.find(catpanion => {
                                                if ((catpanion.user_id === loggedInUser.id) && (catpanion.friend_id === user.id)){
                                                    return catpanion.id
                                                }
                                            })
                                            fetch(`/catpanions/${catpanionToDelete.id}`, {method: "DELETE"})
                                            setSearchDisabled(currentState => !currentState)
                                        }
                                    }>{searchDisabled ? "Friend Removed" : "Unfriend"}</Button>
                                </>
                                :
                                    <Button variant="contained" sx={ { borderRadius: 28 } } onClick={
                                        function handleAddFriend(){
                                            fetch(`/catpanions`, {
                                                method: 'POST',
                                                headers: {
                                                    "Accept": "application/json",
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify({user_id: currentUser.id, friend_id: user.id}),
                                            })
                                        }
                                    }>Add Friend</Button>
                            }
                            </Grid>
                        </Grid>
                    </Item>
        })
        return renderUsers
    }

  return (
    <Stack 
        direction="column"
        alignItems="stretch"
        justifyContent="center"
        spacing={2}
        width="75%"
        marginLeft="5%">
        {search === "" ? loggedInUser.friends?.map(friend => (
            <CatpanionItem key={friend.id}
            friend={friend} 
            Item={Item} 
            catpanions={catpanions} 
            loggedInUser={loggedInUser}
            />
        ))
        : allUsers()
        }      
    </Stack>
  )
}

export default CatpanionsList