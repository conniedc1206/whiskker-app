import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material"
import CatpanionsSearch from "./CatpanionsSearch.js"
import CatpanionsList from "./CatpanionsList.js"

// Need current user to get current users friends
// Need all users to search for friends to follow

//

function Catpanions( { currentUser } ) {

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
            <CatpanionsList currentUser={currentUser} search={search} users={users} />
        </Grid>
    )
}

export default Catpanions