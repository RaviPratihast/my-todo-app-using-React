import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import "./header.css";

function Header(){
    return <>
        <header>
            <h2>personal<span>Note</span><CreateIcon/></h2>
        </header>
    </>
}


export default Header;