import React from 'react';
import {FaUserGraduate,FaUniversity,FaCertificate,FaCalendarMinus,FaCalendarCheck} from 'react-icons/fa';
import {GiStack} from 'react-icons/gi'
import html5 from './icons/html5.png'
import css from './icons/css.jpg';
import js from './icons/js.png';
import py from './icons/py.jpg';
import php from './icons/php.png';
import sql from './icons/sql.png';
import react from './icons/react.png';
import node from './icons/node.png';


function Resume(){
    return(
        <div className="resume">
        <h5><FaUserGraduate /> Education</h5>
        <div>
            <h6><FaUniversity/> Moi University, Kenya</h6>
            <p><FaCalendarMinus/> 2017 - Present</p>
            <p>Bsc. Computer Science</p>
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
            <a href="https://www.mu.ac.ke/" target ="blank" rel="noopener nofollow" >Check school site</a>
        </div>
        <div>
            <h6><FaCertificate /> ABC Secondary School</h6>
            <p><FaCalendarCheck/> 2013 - 2016</p>
            <p>Kenya Certificate of Secondary Education</p>
            <p>
            Lorem ipsum is so ubiquitous because it is so versatile. 
            Select how many paragraphs you want, copy, paste, 
            and break the lines wherever it is convenient. 
            Real copy doesn't work that way.
            </p>
            <a href="/#" >Check school site</a>
        </div>
    </div>
    );
}

function Languages(){
    return(
        <div className="lang">
            <h5><GiStack/> Languages</h5>
            <div id='languages'>
                <img src={html5} alt="html5" />
                <img src={css} alt="css" />
                <img src={js} alt="js" />
                <img src={php} alt="php" />
                <img src={sql} alt="MySQL" />
                <img src={node} alt="node" />
                <img src={react} alt="React" />
                <img src={py} alt="Python" />
            </div>
        </div>
    );
}

function Stack(props){
    return(
        <div className='stack' id="stack">
            <h4><span className="h4line"></span>&nbsp;&nbsp;My Stack</h4>
            <Languages />
            <Resume />

        </div>
    );
}

export default Stack;