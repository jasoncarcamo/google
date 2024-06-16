import React from "react";
import {Link} from "react-router-dom";
import "./NavBar.css";
import AppBar from "@mui/material/MenuItem"
import Avatar from "@mui/material/Avatar";
import AppsIcon from "@mui/icons-material/Apps"
import SearchContainer from "../SearchContainer/SearchContainer";

export default class NavBar extends React.Component{
  render(){
    return (
      <nav className="home">
        <div className="home_header">  
          <div className="home_headerLeft">
            <Link to="/about">About</Link>
            <Link to="/about">Store</Link>
          </div>

          <div className="home_headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
            <AppsIcon/>
            <Avatar/>
          </div>
        </div>

        <SearchContainer/>
      </nav>
    );
  };
};