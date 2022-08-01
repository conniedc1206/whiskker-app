import React from "react";
import { useState } from "react";
import { Box, Stack, Avatar, TextField, Button, Card } from "@mui/material";

export default function NewsFeedComments () {

    // const { image, addComment } = useContext(CommentContext); 

    //Material UI
    const [commentTxt, setCommentTxt] = useState("");

    return(
        <Card>
        <Box sx={{ p: "15px" }}>
            <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar
              src="https://m.media-amazon.com/images/I/71kNvlpS9GL._AC_SS450_.jpg" //catpanions-user avatar photo
              //   variant="rounded" 
              alt="user-avatar"
              />
                <TextField
               multiline
               fullWidth
               margin="0"
               //    minRows={4}
               id="outlined-multilined"
               placeholder="Meows"
               value={commentTxt}
               onChange={(e) => {
                   setCommentTxt(e.target.value);
                }}
                />
             <Button
              size="small"
              sx={{
                  bgcolor: "success",
                  color: "neutral.white",
                  p: "8px 25px",
                  "&:hover": {
                      bgcolor: "success",
                    },
                }}
                //   onClick={(e) => {
                    //     !commentTxt.trim()
                    //       ? e.preventDefault()
                    //       : addComment(commentTxt.trim());
                    //     setCommentTxt("");
                    //   }}
                    >
              Send
                </Button>
            </Stack>
        </Box>
    </Card>
        
    )
}