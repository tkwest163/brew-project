import React from 'react'
import "./Home.scss";

import { Link } from "react-router-dom";


const Home = (props) => {
    const { toggleHome } = props;


    return (
        <div className="home">
            <Link to="/" onClick={toggleHome} className="home_button" >
                Home
            </Link>
            <Link to="/" onClick={toggleHome} className="contact_button" >
                Contact Us
            </Link>
            <Link to="/" onClick={toggleHome} className="shop_button" >
                Shop
            </Link>

        </div>
    )
}

export default Home;