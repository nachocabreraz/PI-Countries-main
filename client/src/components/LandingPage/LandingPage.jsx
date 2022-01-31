import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to the Countries Website</h1>
            <Link to='/home'><button>Enter Website</button></Link>
        </div>
    )
}