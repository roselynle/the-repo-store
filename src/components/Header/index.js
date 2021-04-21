import React from "react";
import "../../App.css";

const Header = () => {
    return (
        <div id="header-container">
            <div id="logo-container">
                <img
                    id="logo"
                    src="https://img.icons8.com/ios/452/github.png"
                ></img>
            </div>
            <h1 id="main-heading">Your Repo Story</h1>
        </div>
    );
};
export default Header;
