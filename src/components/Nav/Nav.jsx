import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";



export default function Nav(props) {

    return (

        <div className={style.Nav}>
            <Link to="/about">
                <h3>About</h3>
            </Link>
            <Link to="/home">
                <h3>Home</h3>
            </Link>
            <Link to="/favorites">
                <h3>Favorites</h3>
            </Link>
            <SearchBar
                onSearch={props.onSearch}
            />
        </div>
    )
}
