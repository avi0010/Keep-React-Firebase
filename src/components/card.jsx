import React from "react";
import Card from '@material-ui/core/Card';
import TodayTwoToneIcon from '@material-ui/icons/TodayTwoTone';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        maxWidth:350,
        margin:20,
        backgroundColor:"#ffd460",
        outline:"none",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function(props){
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom><TodayTwoToneIcon style={{margin:"5px"}} />{props.date}</Typography>
                <Typography variant="h5" component="h2">
                    {props.text}
                </Typography>
            </CardContent>

        </Card>
    );
}