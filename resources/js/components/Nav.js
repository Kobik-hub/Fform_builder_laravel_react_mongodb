import React,{useContext,useState} from "react";
import ReactDOM from "react-dom";
import Login from "./Login";
import {UserContext} from './Index';

function Nav() {
    const { user } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Form Builder</a>

                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                    </ul>
                    <ul className="navbar-nav">
                        {user.name.length >0 ?
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false"> {user.name} </a>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <li><a onClick={()=> {
                                        localStorage.removeItem('user');
                                    }} className="dropdown-item" href="/">Logout</a></li>
                                    <li><a className="dropdown-item" href="/forms">Your forms</a></li>
                                    <li><a className="dropdown-item" href="/formBuilder">Form builder</a></li>
                                </ul>

                            </li>
                        : <> <li className="p-2 ">
                                <a className="nav-link" href='/login'>Login</a>
                            </li>
                            <li className="p-2">
                            <a className="nav-link" href='/register'>Register</a>
                            </li>
                            </>}
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Nav;
