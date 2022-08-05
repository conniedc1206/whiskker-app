import React from 'react'
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Grid } from "@mui/material"

function CatpanionsSearch( { search, setSearch } ) {
  
    function handleChange(e){
        setSearch(e.target.value)
    }
  
    return (
    <Grid item margin="auto"  marginTop="2%" marginBottom="2%" marginLeft="5%">
        <form style={{ width: "auto" }}>
            <Grid item alignItems="center">
                <TextField
                id="search-bar"
                value={search}
                onChange={handleChange}
                className="text"
                label="Search by full name"
                variant="outlined"
                placeholder="Search by full name"
                size="small"
                />
                <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </Grid>
        </form>
    </Grid>
  )
}

export default CatpanionsSearch