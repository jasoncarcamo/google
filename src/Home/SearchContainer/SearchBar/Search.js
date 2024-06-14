import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { Button } from "@mui/material";

export default class SearchBar extends React.Component{
    render(){
        return (
            <div className="search">
                <div className="search_input">
                    <SearchIcon classnMe="search_inputIcon"/>
                    <input/>
                    <MicIcon/>
                </div>

                <div className="search_buttons">
                    <Button varient="outlined">Google Search</Button>
                    <Button varient="outlined">I'm Feeling Lucky</Button>
                </div>
            </div>
        );
    }
}