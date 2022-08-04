import { useState, useEffect } from "react";
import { Grid } from "@mui/material"
import CatpanionsSearch from "./CatpanionsSearch.js"
import CatpanionsList from "./CatpanionsList.js"

// Need current user to get current users friends
// Need all users to search for friends to follow

//

function Catpanions( { currentUser, catpanions, setCatpanions } ) {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("/users")
        .then(res => res.json())
        .then(setUsers)
    }, [])
    
    return (
        <Grid container style={{ display: "inline-block", width: "80%", margin: "auto", justifyContent: "space-evenly" }}>
            <CatpanionsSearch setSearch={setSearch} search={search} />
            <CatpanionsList currentUser={currentUser} search={search} users={users} catpanions={catpanions} setCatpanions={setCatpanions}/>
        </Grid>
    )
}

export default Catpanions