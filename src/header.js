import React from 'react';
//import Circle from 'react-circle';
import { FaGithub,FaTwitter,FaLinkedin,FaMapMarkerAlt,FaArrowCircleDown} from "react-icons/fa";
import {MdWork} from 'react-icons/md';
//import {BsBookmark} from 'react-icons/bs';
import me from './images/passport.jpg';

function Social (){
    return(
        <ul id="social">
            <li><a href="https://github.com/harun281" target="_blank" rel="noopener noreferrer"><FaGithub/></a></li>
            <li><a href="https://www.twitter.com/harunmuriiki" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
            <li><a href="https://www.linkedin.com/in/harun-muriiki-7953921a3/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a></li>
        </ul>
    );
}
function Intro(props){
    return(
        <div className="intro">
            <img src={me} alt="me here" />
            <div style={{alignSelf:'center',textAlign:'center'}}>
                <h2>Hi, I'am Harun Muriiki</h2>
                <h3><MdWork/> Web Developer</h3>
                <h5><FaMapMarkerAlt/> Nakuru, Kenya</h5>  
            </div>
            <Social  />
            <FaArrowCircleDown 
                style={{fontSize: '30px', alignSelf:'center', marginTop:'20px'}}
            />

        </div>
    );
}

function Header(){
    return(
        <div className='header'>
            {/*<Navbar />*/}
            <Intro />

        </div>
    );
}

export default Header;