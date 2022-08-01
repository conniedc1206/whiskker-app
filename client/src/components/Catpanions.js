import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';



function Catpanions() {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary
      }));
    
    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <form style={{ width: "auto" }} >
                <TextField
                id="search-bar"
                className="text"
                // onInput={(e) => {
                //     setSearchQuery(e.target.value);
                // }}
                label="Search Catpanions"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
                </IconButton>
            </form>
            <Stack 
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            spacing={2}>
                <Item >
                    <Avatar alt="Remy Sharp" src="https://i.imgur.com/Dma78GM.jpg" sx={{ width: 56, height: 56 }}/>
                    username
                    <Button variant="contained" sx={ { borderRadius: 28 } }>Message </Button>
                    <Button variant="contained" sx={ { borderRadius: 28 } }>Unfriend </Button>
                </Item>
                <Item>
                    Friend #2
                    <Button variant="contained" sx={ { borderRadius: 28 } }>Send Friend Request </Button>
                </Item>
                <Item>Friend #3</Item>
            </Stack>
        </div>
    )
}

export default Catpanions