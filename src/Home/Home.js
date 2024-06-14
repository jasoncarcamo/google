import React from "react";
import NavBar from "./NavBar/NavBar.js"
import "./Home.css";
import SearchContainer from "./SearchContainer/SearchContainer.js";

export default class Home extends React.Component{
  render(){
    return (
      <section className="home">
        <NavBar/>
      </section>
    );
  };
};