import React from "react";
import "./SearchContainer.css";
import SearchBar from "./SearchBar/Search";

export default class SearchContainer extends React.Component{
    render(){
        return (
        <section className="home_body">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Icon"/>
            
            <div className="home_inputContainer">
                <SearchBar/>
            </div>
        </section>
        ); 
    };
};