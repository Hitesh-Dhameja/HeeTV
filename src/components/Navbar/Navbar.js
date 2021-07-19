import React from 'react'
import './Navbar.css'
import { useState } from 'react';
import { useStateValue } from "../../redux/StateProvider";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../../redux/reducer";
import { Link } from 'react-router-dom'


function Navbar({ menu, email, logOut }) {
    const [{ }, dispatch] = useStateValue();
    const history = useHistory();
    const [term, setTerm] = useState("");

    const searched = (e) => {
        e.preventDefault();
        console.log("search!");

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: term,
        });

        history.push(`/HeeTV/search`);
    };
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <img src="https://cdn6.aptoide.com/imgs/c/0/0/c009d398556ab5ab9d124727b471e3c6_icon.png"
                    alt="logo" height="80px" width="120px" />
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                {menu ?
                    <div class="collapse navbar-collapse ownList" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto" >
                            <li class="nav-item active ml-3">
                                <a class="nav-link" href="/HeeTV">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item ml-3">
                                <a class="nav-link" href="/HeeTV">Movie</a>
                            </li>
                            <li class="nav-item ml-3">
                                <a class="nav-link" href="/HeeTV">TV Show</a>
                            </li>
                            <li class="nav-item ml-3">
                                <a class="nav-link" href="/pricing/">Pricing</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={term} onChange={(e) => setTerm(e.target.value)} />
                            <button class="btn btn-outline-warning my-2 my-sm-0" type="button" onClick={searched}>Search</button>
                        </form>
                        {email ? <button class="btn btn-outline-warning ml-4" onClick={()=>{logOut()}}>LOGOUT</button> : <div><a href="/HeeTV/login/" class="btn btn-outline-warning ml-4">LOG IN</a> <a href="/HeeTV/signup/" class="btn btn-outline-warning ml-4">SIGN UP</a></div>}
                    </div> : ''}
            </nav>
        </div >
    )
}

export default Navbar
