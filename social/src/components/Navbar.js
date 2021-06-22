import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
 const Navbar = ()=>{
    return(
        <nav>
        <div className="container">
            <div className="branding">
                <Link href="#">
                    <h2>Ashyou</h2>
                </Link>
            </div>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/highlights">My Highlight</Link></li>
                <li><Link to="/story">My Story</Link> </li>
                <li><Link to="/life">My life</Link> </li>
                <li><Link to="/follow">Follow me</Link> </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar;