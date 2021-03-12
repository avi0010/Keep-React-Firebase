import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Box} from "@material-ui/core";
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';


export default function(props){
    const [onClick, setInputHover] = React.useState(false)
    const [data, setData] = React.useState("");

    function handleClick(e){
        e.preventDefault();
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today.getFullYear();
        const date = mm + '/' + dd + '/' + yyyy;
        props.input(data, date);
        setData("");
    }
    

    return<div>
        <form>
            <div style={{marginTop: "50px", marginBottom:"50px"}}>
                <TextField
                    id="standard-multiline-flexible"
                    label="Take a Note"
                    multiline
                    onClick={()=>setInputHover(true)}
                    onChange={e => setData(e.target.value)}
                    value={data}
                    style={{width: "30%"}}
                />
                <button
                    onClick={(e) => handleClick(e)}
                    style={{borderStyle:"none", background:"none", outline:"none", color:"#ffd460"}}
                    type="submit"
                >
                    <NoteAddOutlinedIcon style={{marginTop:"20px", fontSize:"30px"}} />
                </button>
            </div>

        </form>
    </div>
}