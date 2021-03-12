import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import NoteTwoToneIcon from '@material-ui/icons/NoteTwoTone';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{backgroundColor: "#ffd460"}}>
                <Toolbar variant="dense">
                    <NoteTwoToneIcon style={{fontSize:"40px", marginRight:"10px"}} />
                    <Typography variant="h6" color="inherit" style={{fontSize:"30px"}}>
                        Keeper
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}