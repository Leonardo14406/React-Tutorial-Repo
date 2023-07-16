import React from "react";
import image from "../images/free-react-1-282599 (1) (4).png"
const NavComp = () => {
    return (
        <header>
            <nav>
                <img className="react-icon" src={image} alt="react-logo"/>
                <h3 className="nav-heading">ReactFacts</h3>
                <h4 className="nav-title">React Course - Project 1</h4>
            </nav>
        </header>
    )
}
export default NavComp