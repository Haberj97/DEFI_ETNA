import React, { useState } from "react";

function Menu(props) {

    
    return(
    <nav id="nav1">
        <div className="drop-btn">
            <span className="fas fa-align-justify"></span>
            Settings
        </div>
        <div className="wrapper">
            <ul className="menu_bar">
                <li>
                    <a href="/">
                        <div className="icon"><span className="fas fa-home"></span></div>
                        Home
                    </a>
                </li>

                <li>
                    <a href="/admin">
                        {props.isAdmin ?<div className="icon">
                            <span className="fas fa-cog"></span>
                            </div>: <p></p>}
                    </a>
                </li>

                <li>
                    <a href="#">
                        {props.isAdmin ? <div>
                                <button className="createNewPost icon">
                                    <span className="fas fa-plus">Add</span>
                                </button> 
                            </div>: <p></p>}
                    </a>
                </li>

                <li>
                <form method="POST" action="/logout"><button >LOGOUT</button></form>
                </li>
            </ul>
        </div>
    </nav>
)}

module.exports = Menu;