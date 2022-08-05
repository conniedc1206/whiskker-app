import React, { useEffect, useState } from 'react'
import Stack from "@mui/material/Stack";
import { Paper } from "@mui/material"
import { styled } from "@mui/material/styles";
import CatpanionItem from "./CatpanionItem.js"
import CatpanionSearchItem from "./CatpanionSearchItem.js"

function CatpanionsList( { currentUser, search, users, catpanions } ) {

    // const [loggedInUser, setLoggedInUser] = useState({})
    // page reload

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
        }));

    // useEffect(() => {
    //     fetch(`/users/${currentUser.id}`)
    //     .then(res => res.json())
    //     .then(setLoggedInUser)
    // }, [catpanions])

    function allUsers(){
        
        let allUsersArray = []
        const matchingUsers = users.filter(user => {
            return user.full_name.toLowerCase().includes(search.toLowerCase())
        })

        console.log(allUsersArray)

        allUsersArray = matchingUsers

        const renderUsers = allUsersArray?.map(user => {
            return <CatpanionSearchItem key={user.id} 
            user={user} 
            catpanions={catpanions} 
            currentUser={currentUser} 
            Item={Item} />
            })
        return renderUsers
        }

  return (
    <>
        <Stack 
            direction="column"
            alignItems="stretch"
            justifyContent="center"
            spacing={2}
            width="75%"
            marginLeft="5%">
            {search === "" ? currentUser.friends?.map(friend => (
                <CatpanionItem key={friend.id}
                friend={friend} 
                Item={Item} 
                catpanions={catpanions} 
                currentUser={currentUser}
                />
            ))
            : 
            allUsers()
            }      
        </Stack>
    </>
  )
}

export default CatpanionsList