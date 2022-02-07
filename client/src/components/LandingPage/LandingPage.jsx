import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className='image'>

            <div className='divheader'>
            <h1 className='header'>Welcome to the Countries Website</h1>
            </div>

            <div>
            <h3 className='quote'>“The world is a book and those who do not travel read only one page.” ~ Saint Augustine</h3>
            </div>
            
            <div>
            <Link to='/home'><button className='button'>Enter!</button></Link>
            </div>


        </div>
    )
}