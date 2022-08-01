import { useState, React } from 'react';

import { Grid, Typography, Paper, List, ListItem, Avatar, Divider, ListItemText, ListItemIcon, TextField, Fab } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
})

export default function Message ({posts}) {

    const [commentTxt, setCommentTxt] = useState("");


    return (
        <div>
            <Grid container marginTop={10} marginBottom={5} align="center">
                <Grid item xs={12}>
                    <Typography variant="h5" className="header-message"> MeowMessages</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} sx={{ width: "100%", height: "80vh" }}>
                <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0"}}>
                    <List>
                        <ListItem button key="Harrison">
                            <ListItemIcon>
                                <Avatar alt="Harrison" src="https://m.media-amazon.com/images/I/71kNvlpS9GL._AC_SS450_.jpg"/>
                            </ListItemIcon>
                            <ListItemText primary="Harry"></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid item xs={12} style={{ padding: "10px" }}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>
                    </Grid>
                    <Divider />
                    <List>
                        <ListItem button key="Connie">
                            <ListItemIcon>
                                <Avatar alt="Connie" src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip" />
                            </ListItemIcon>
                            <ListItemText primary="Connie">Connie</ListItemText>
                        </ListItem>
                        <ListItem button key="Emiley">
                            <ListItemIcon>
                                <Avatar alt="Emiley" src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9"/>
                            </ListItemIcon>
                            <ListItemText primary="Emiley">Emiley</ListItemText>
                        </ListItem>
                    </List>
                </Grid>
            <Grid item xs={9}>
                <List xs={{ height: "70vh", overflowY: "auto" }}>
                    <ListItem key="1">
                            <Grid item xs={12}>
                        <Avatar alt="Connie" src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"/>
                        <Grid container>
                                <ListItemText align="right" primary="Hello! how are you?">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="I'm doing awesome!">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="That's cool.">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style= {{ padding: "20px" }}>
                    <Grid item xs={11}>
                        <TextField id="oulined-basic-email"label="Type Something" fullWidth
                        value={commentTxt}
                        onChange={(e) => { setCommentTxt(e.target.value); }} />
                    </Grid>
                    <Grid xs={1} align="right">
                    <Fab 
                    color="success" 
                    aria-label="add">
                        Send
                    </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>  
    )
}