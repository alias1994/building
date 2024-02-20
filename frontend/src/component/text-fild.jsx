import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import './text-fild.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

const DemoInput = styled(TextField)(({ theme }) => ({
    width: '340px',
    height:'50px',
    ...theme.typography.body2,
    borderRadius: "45px",
    margin: "12px 6px 6px 12px",
    textAlign: 'right',
    backgroundColor: '#F3F3F3',
    disableUnderline: true,
    display: 'inline-block',
    "& fieldset": { border: 'none' },
    "& label": {
        width: "100%",
        textAlign: "right",
        transformOrigin: "center",
        "&.Mui-focused": {
            transformOrigin: "center"
        }
    }
}))

function TextFild({stateName,name,handleInput}) {
    return (<Box><DemoInput name={stateName} onChange={handleInput} className="inp" id="outlined-basic1" label={name} variant="outlined" InputLabelProps={{ style: { fontFamily: "vazir" , color:"#9E9E9E"} }} inputProps={{ style: { fontFamily: "vazir", textAlign: 'right'} }} /></Box>)
}
export default TextFild;