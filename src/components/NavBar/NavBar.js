import React from "react";
import './NavBarmodule.scss';

const NavBar = (props) => {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar-main">
                        <div className="navbar-left">
                            <a href="/" className="navbar-heading">Car Models</a>
                        </div>
                        <div className="navbar-right">
                            <a href="/" className="user-heading">{props.uerName}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavBar;