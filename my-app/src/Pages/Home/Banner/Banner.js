import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className="banner-background-image">
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', fontWeight: 'bold', textAlign: "center" }}><i>Already Have An By-cycle ?</i></h2>
                <h3 style={{ color: 'white', fontWeight: 'bold', textAlign: "center", mb: 1 }}>Repair It Or Buy New One</h3>
                <Link to='/products'><Button style={{ px: 2, py: 1 }}>BUY AN PRODUCTS</Button></Link>
            </div>
        </div>
    );
};

export default Banner;