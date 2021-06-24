import React from 'react'
import '../App.css';
import Insta from './images/socials/insta.jpg';
import Twi from './images/socials/twi.jpg';
import Snap from './images/socials/snap.jpg';
import Fb from './images/socials/fb.jpg';
import {FaInstagramSquare,FaTwitterSquare,FaSnapchatSquare,FaFacebookSquare} from "react-icons/fa";

const Social = () => {
    return (
        <social>
            <div className="social">
               <div className="card2">
               <img src={Insta} alt="Instagram"/>
                <a href="https://www.instagram.com/ashyou._/?hl=en"><FaInstagramSquare/></a>
               </div>
               <div className="card2">
               <img src={Twi} alt="Twitter"/>
                   <a href="https://twitter.com/ashurover000?s=08"><FaTwitterSquare/></a>
               </div>
               <div className="card2">
               <img src={Snap} alt="Snapchat"/>
                   <a href="https://www.snapchat.com/add/rover000"><FaSnapchatSquare/></a>
               </div>
               <div className="card2">
               <img src={Fb} alt="Facebook"/>
                   <a href="https://www.facebook.com/profile.php?id=100008253194324"><FaFacebookSquare/></a>
               </div>
            </div>
        </social>
    )
}

export default Social
